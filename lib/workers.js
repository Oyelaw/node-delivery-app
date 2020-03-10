/*
 *
 *  Worker related operatons
 *
 */

 // Dependencies
 var path = require('path');
 var fs = require('fs');
 var _data = require('./data');
 var https = require('https');
 var http = require('http');
 var helpers = require('./helpers');
 var url = require('url');

 var workers = {};

 workers.gatherAllOrders = function(){
   _data.list('orders', function(err, orders){
     if(!err && orders && orders.length > 0){
       orders.forEach(function(order){
         // Read each order data
         _data.read('orders', order, function(err, originalOrderData){
            if(!err && originalOrderData){
              console.log('HERE in GATHER ALL');
              workers.validateOrderData(originalOrderData);
            } else {
              console.log('Error: Could not read one of the orders');
            }
         });
       });
     } else {
       console.log('Error: Could not find any orders to process');
     }
   });
 }

 workers.validateOrderData = function(originalOrderData){
   originalOrderData = typeof(originalOrderData) == 'object' && originalOrderData !== null ? originalOrderData : {};
   originalOrderData.id = typeof(originalOrderData.id) == 'string' && originalOrderData.id.trim().length == 20 ? originalOrderData.id.trim() : false;
   originalOrderData.deliveryPhone = typeof(originalOrderData.deliveryPhone) == 'string' && originalOrderData.deliveryPhone.trim().length == 11 ? originalOrderData.deliveryPhone.trim() : false;
   originalOrderData.deliveryAddress = typeof(originalOrderData.deliveryAddress) == 'string' && originalOrderData.deliveryAddress.trim().length > 0 ? originalOrderData.deliveryAddress.trim() : false;
   originalOrderData.pickupPhone = typeof(originalOrderData.pickupPhone) == 'string' && originalOrderData.pickupPhone.trim().length == 11 ? originalOrderData.pickupPhone.trim() : false;
   originalOrderData.pickupAddress = typeof(originalOrderData.pickupAddress) == 'string' && originalOrderData.pickupAddress.trim().length > 0 ? originalOrderData.pickupAddress.trim() : false;

   // Set state and time checked
   originalOrderData.state = typeof(originalOrderData.state) == 'string' && ['pending', 'delivered', 'picked'].indexOf(originalOrderData.state) > -1 ? originalOrderData.state : 'pending';
   originalOrderData.lastChecked = typeof(originalOrderData.lastChecked) == 'number' && originalOrderData.lastChecked > 0 ? originalOrderData.lastChecked : false;

   if(originalOrderData.id &&
      originalOrderData.deliveryPhone &&
      originalOrderData.deliveryAddress &&
      originalOrderData.pickupPhone &&
      originalOrderData.pickupAddress) {
        workers.performCheck(originalOrderData);
        console.log('HERE in VALIDATE ORDER DATA');
      } else {
        console.log('Error: one of the orders is not properly formatted. Skipping it');
      }
 };

// Perform check
workers.performCheck = function(originalOrderData){
  var checkOutcome = {
    'state': '',
    'error': false,
    'responseCode': false
  };

var outcomeSent = false;

var parsedUrl = url.parse(`http://localhost:3000/orders?id=${originalOrderData.id}`, true);
var hostName = parsedUrl.hostname;
var path = parsedUrl.path;

// Construct the request
var requestDetails = {
  'protocol': 'http:',
  'hostname': hostName,
  'method': 'GET',
  'path': path,
  'timeout': 5000,
  'port':3000
};

var _moduleToUse = originalOrderData.protocol == 'http' ? http : http;
var req = _moduleToUse.request(requestDetails, function(res){
  var status = res.statusCode;
  var state = typeof(res.state) == 'string' && ['pending', 'delivered', 'picked'].indexOf(res.state) > -1 ? res.state : 'pending';
  console.log('RES.STATE AFTER STATE CHECKED', res.payload);
  console.log('STATE AFTER STATE CHECKED', state);
  checkOutcome.responseCode = status;
  checkOutcome.state = state;
  if(!outcomeSent){
    workers.processCheckOutCome(originalOrderData, checkOutcome);
    outcomeSent = true;
  }
});

// Bind to the error event so it does not get thrown
req.on('error', function(e) {
  // Update the checkOutcome and pass the data along
  checkOutcome.error = {
    'error': true,
    'value': e
  };
  if(!outcomeSent) {
    workers.processCheckOutCome(originalOrderData, checkOutcome);
    outcomeSent = true;
  }
});

// Bind to the timeout event
req.on('timeout', function(e) {
  // Update the checkOutcome and pass the data along
  checkOutcome.error = {
    'error': true,
    'value': 'Time Out'
  };
  console.log('ERRRRR!!!!!!!');
  if(!outcomeSent) {
    workers.processCheckOutCome(originalOrderData, checkOutcome);
    outcomeSent = true;
  }
});

// End the request
req.end();

};

workers.processCheckOutCome = function(originalOrderData, checkOutcome){
  var state = !checkOutcome.error && checkOutcome.responseCode && ['pending', 'delivered', 'picked'].indexOf(checkOutcome.state) > -1 ? checkOutcome.state : 'pending';

  var alertwarranted = originalOrderData.lastChecked && originalOrderData.state !== state ? true : false;

  var timeOfCheck = Date.now();

  // workers.log(originalOrderData, checkOutcome, state, alertwarranted, timeOfCheck);

  var newOrderData = originalOrderData;
  newOrderData.state = state;
  newOrderData.lastChecked = timeOfCheck;

  // Save the updates
  _data.update('orders', newOrderData.id, newOrderData, function(err){
    if(!err) {
      if(alertwarranted){
        console.log('YAAY!!!!!');
      } else {
        console.log('Order status has not changed. No alert needed');
      }
    } else {
      console.log('Error trying to save updates to one of the orders');
    }
  });

};

workers.loop = function(){
  setInterval(function(){
    workers.gatherAllOrders();
  }, 1000 * 60)
};

// Init script
workers.init = function() {
  // Send to console in yellow
  console.log('\x1b[33m%s\x1b[0m', 'Background workers are running');
  // Execute all the checks immediately
  workers.gatherAllOrders();

  // call the loop so checks will execute later on
  workers.loop();
};


// Export the module
module.exports = workers
