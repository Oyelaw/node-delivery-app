/*
 * Request Handlers
 *
 */

// Dependencies
var _data = require('./data');
var helpers = require('./helpers');

// Define all the handlers
var handlers = {};

/*
 *
 *  HTML Handlers
 *
 */

 // Index
 handlers.index = function(data,callback){
   // Reject any request that isn't a GET
   if(data.method == 'get'){
     // Prepare data for interpolation
     var templateData = {
       'head.title' : 'Fast Delivery and Realtime Monitoring - Made Simple',
       'head.description' : 'We offer delivery services at affordable rates, with real time montoring of your package',
       'body.class' : 'index',
     };

     // Read in a template as a string
     helpers.getTemplate('index',templateData,function(err,str){
       if(!err && str){
         // Add the universal header and footer
         helpers.addUniversalTemplates(str,templateData,function(err,str){
           if(!err && str){
             // Return that page as HTML
             callback(200,str,'html');
           } else {
             callback(500,undefined,'html');
           }
         });
       } else {
         callback(500,undefined,'html');
       }
     });
   } else {
     callback(405,undefined,'html');
   }
 };

 // Account Create
 handlers.accountCreate = function(data, callback){
   // check if method is GET,
   if(data.method == 'get'){
     // set template data object
     var templateData = {
       'head.title': 'Create a swift delivery account',
       'head.description': 'Signup is easy and only takes a minute or two',
       'body.class': 'accountCreate'
     }

     // get the template
     helpers.getTemplate('accountCreate', templateData, function(err, str){
       if(!err && str){
         helpers.addUniversalTemplates(str, templateData, function(err, str){
           if(!err && str){
             callback(200, str, 'html');
           } else {
             callback(500, undefined, 'html');
           }
         });
       } else {
         callback(500, undefined, 'html');
       }
     });
   } else {
     callback(405, undefined, 'html');
   }
 };

 // Session Create
 handlers.sessionCreate = function(data, callback){
   // check if method is GET,
   if(data.method == 'get'){
     // set template data object
     var templateData = {
       'head.title': 'Login into your swift delivery account',
       'head.description': 'Enter your phone number and password',
       'body.class': 'sessionCreate'
     }

     // get the template
     helpers.getTemplate('sessionCreate', templateData, function(err, str){
       if(!err && str){
         helpers.addUniversalTemplates(str, templateData, function(err, str){
           if(!err && str){
             callback(200, str, 'html');
           } else {
             callback(500, undefined, 'html');
           }
         });
       } else {
         callback(500, undefined, 'html');
       }
     });
   } else {
     callback(405, undefined, 'html');
   }
 };

 // Session Delete
 handlers.sessionDeleted = function(data, callback){
   // check if method is GET,
   if(data.method == 'get'){
     // set template data object
     var templateData = {
       'head.title': 'Logged out',
       'head.description': 'You have been logged out of your account',
       'body.class': 'sessionDeleted'
     }

     // get the template
     helpers.getTemplate('sessionDeleted', templateData, function(err, str){
       if(!err && str){
         helpers.addUniversalTemplates(str, templateData, function(err, str){
           if(!err && str){
             callback(200, str, 'html');
           } else {
             callback(500, undefined, 'html');
           }
         });
       } else {
         callback(500, undefined, 'html');
       }
     });
   } else {
     callback(405, undefined, 'html');
   }
 };

 // Account Edit
 handlers.accountEdit = function(data, callback){
   // check if method is GET,
   if(data.method == 'get'){
     // set template data object
     var templateData = {
       'head.title': 'Account Settings',
       'body.class': 'accountEdit'
     }

     // get the template
     helpers.getTemplate('accountEdit', templateData, function(err, str){
       if(!err && str){
         helpers.addUniversalTemplates(str, templateData, function(err, str){
           if(!err && str){
             callback(200, str, 'html');
           } else {
             callback(500, undefined, 'html');
           }
         });
       } else {
         callback(500, undefined, 'html');
       }
     });
   } else {
     callback(405, undefined, 'html');
   }
 };

 // Account Deleted
 handlers.accountDeleted = function(data, callback){
   // check if method is GET,
   if(data.method == 'get'){
     // set template data object
     var templateData = {
       'head.title': 'Account Deleted',
       'head.description': 'Your account has been deleted',
       'body.class': 'accountDeleted'
     }

     // get the template
     helpers.getTemplate('accountDeleted', templateData, function(err, str){
       if(!err && str){
         helpers.addUniversalTemplates(str, templateData, function(err, str){
           if(!err && str){
             callback(200, str, 'html');
           } else {
             callback(500, undefined, 'html');
           }
         });
       } else {
         callback(500, undefined, 'html');
       }
     });
   } else {
     callback(405, undefined, 'html');
   }
 };

 handlers.ordersCreate = function(data,callback){
   // Reject any request that isn't a GET
   if(data.method == 'get'){
     // Prepare data for interpolation
     var templateData = {
       'head.title' : 'Create a New Order',
       'body.class' : 'ordersCreate'
     };
     // Read in a template as a string
     helpers.getTemplate('ordersCreate',templateData,function(err,str){
       if(!err && str){
         // Add the universal header and footer
         helpers.addUniversalTemplates(str,templateData,function(err,str){
           if(!err && str){
             // Return that page as HTML
             callback(200,str,'html');
           } else {
             callback(500,undefined,'html');
           }
         });
       } else {
         callback(500,undefined,'html');
       }
     });
   } else {
     callback(405,undefined,'html');
   }
 };

 // Dashboard (view all checks)
 handlers.ordersList = function(data,callback){
   // Reject any request that isn't a GET
   if(data.method == 'get'){
     // Prepare data for interpolation
     var templateData = {
       'head.title' : 'Dashboard',
       'body.class' : 'ordersList'
     };
     // Read in a template as a string
     helpers.getTemplate('ordersList',templateData,function(err,str){
       if(!err && str){
         // Add the universal header and footer
         helpers.addUniversalTemplates(str,templateData,function(err,str){
           if(!err && str){
             // Return that page as HTML
             callback(200,str,'html');
           } else {
             callback(500,undefined,'html');
           }
         });
       } else {
         callback(500,undefined,'html');
       }
     });
   } else {
     callback(405,undefined,'html');
   }
 };

 // Edit a Check
 handlers.ordersEdit = function(data,callback){
   // Reject any request that isn't a GET
   if(data.method == 'get'){
     // Prepare data for interpolation
     var templateData = {
       'head.title' : 'Order Details',
       'body.class' : 'ordersEdit'
     };
     // Read in a template as a string
     helpers.getTemplate('ordersEdit',templateData,function(err,str){
       if(!err && str){
         // Add the universal header and footer
         helpers.addUniversalTemplates(str,templateData,function(err,str){
           if(!err && str){
             // Return that page as HTML
             callback(200,str,'html');
           } else {
             callback(500,undefined,'html');
           }
         });
       } else {
         callback(500,undefined,'html');
       }
     });
   } else {
     callback(405,undefined,'html');
   }
 };

 // Public assets
 handlers.public = function(data,callback){
   // Reject any request that isn't a GET
   if(data.method == 'get'){
     // Get the filename being requested
     var trimmedAssetName = data.trimmedPath.replace('public/','').trim();
     if(trimmedAssetName.length > 0){
       // Read in the asset's data
       helpers.getStaticAsset(trimmedAssetName,function(err,data){
         if(!err && data){

           // Determine the content type (default to plain text)
           var contentType = 'plain';

           if(trimmedAssetName.indexOf('.css') > -1){
             contentType = 'css';
           }

           if(trimmedAssetName.indexOf('.png') > -1){
             contentType = 'png';
           }

           if(trimmedAssetName.indexOf('.jpg') > -1){
             contentType = 'jpg';
           }

           if(trimmedAssetName.indexOf('.ico') > -1){
             contentType = 'favicon';
           }

           // Callback the data
           callback(200,data,contentType);
         } else {
           callback(404);
         }
       });
     } else {
       callback(404);
     }

   } else {
     callback(405);
   }
 };


/*
 * JSON API Handlers
 */
// Ping
handlers.ping = function(data,callback){
    callback(200);
};

// Not-Found
handlers.notFound = function(data,callback){
  callback(404);
};

// Example Error
handlers.example = function(data, callback){
  var err = new Error('This is an example error');
  throw(err);
};

// Users
handlers.users = function(data,callback){
  var acceptableMethods = ['post','get','put','delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
    handlers._users[data.method](data,callback);
  } else {
    callback(405);
  }
};

// Container for all the users methods
handlers._users  = {};

// Users - post
// Required data: firstName, lastName, phone, password, tosAgreement
// Optional data: none
handlers._users.post = function(data,callback){
  // Check that all required fields are filled out
  var firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
  var lastName = typeof(data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
  var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 11 ? data.payload.phone.trim() : false;
  var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
  var tosAgreement = typeof(data.payload.tosAgreement) == 'boolean' && data.payload.tosAgreement == true ? true : false;

  if(firstName && lastName && phone && password && tosAgreement){
    // Make sure the user doesnt already exist
    _data.read('users',phone,function(err,data){
      if(err){
        // Hash the password
        var hashedPassword = helpers.hash(password);

        // Create the user object
        if(hashedPassword){
          var userObject = {
            'firstName' : firstName,
            'lastName' : lastName,
            'phone' : phone,
            'hashedPassword' : hashedPassword,
            'tosAgreement' : true
          };

          // Store the user
          _data.create('users',phone,userObject,function(err){
            if(!err){
              callback(200);
            } else {
              console.log(err);
              callback(500,{'Error' : 'Could not create the new user'});
            }
          });
        } else {
          callback(500,{'Error' : 'Could not hash the user\'s password.'});
        }

      } else {
        // User alread exists
        callback(400,{'Error' : 'A user with that phone number already exists'});
      }
    });

  } else {
    callback(400,{'Error' : 'Missing required fields'});
  }

};

// Required data: phone
// Optional data: none
handlers._users.get = function(data,callback){
  // Check that phone number is valid
  var phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 11 ? data.queryStringObject.phone.trim() : false;
  if(phone){

    // Get token from headers
    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(token,phone,function(tokenIsValid){
      if(tokenIsValid){
        // Lookup the user
        _data.read('users',phone,function(err,data){
          if(!err && data){
            // Remove the hashed password from the user user object before returning it to the requester
            delete data.hashedPassword;
            callback(200,data);
          } else {
            callback(404);
          }
        });
      } else {
        callback(403,{"Error" : "Missing required token in header, or token is invalid."})
      }
    });
  } else {
    callback(400,{'Error' : 'Missing required field'})
  }
};

// Required data: phone
// Optional data: firstName, lastName, password (at least one must be specified)
handlers._users.put = function(data,callback){
  // Check for required field
  var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 11 ? data.payload.phone.trim() : false;

  // Check for optional fields
  var firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
  var lastName = typeof(data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
  var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

  // Error if phone is invalid
  if(phone){
    // Error if nothing is sent to update
    if(firstName || lastName || password){

      // Get token from headers
      var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;

      // Verify that the given token is valid for the phone number
      handlers._tokens.verifyToken(token,phone,function(tokenIsValid){
        if(tokenIsValid){

          // Lookup the user
          _data.read('users',phone,function(err,userData){
            if(!err && userData){
              // Update the fields if necessary
              if(firstName){
                userData.firstName = firstName;
              }
              if(lastName){
                userData.lastName = lastName;
              }
              if(password){
                userData.hashedPassword = helpers.hash(password);
              }
              // Store the new updates
              _data.update('users',phone,userData,function(err){
                if(!err){
                  callback(200);
                } else {
                  callback(500,{'Error' : 'Could not update the user.'});
                }
              });
            } else {
              callback(400,{'Error' : 'Specified user does not exist.'});
            }
          });
        } else {
          callback(403,{"Error" : "Missing required token in header, or token is invalid."});
        }
      });
    } else {
      callback(400,{'Error' : 'Missing fields to update.'});
    }
  } else {
    callback(400,{'Error' : 'Missing required field.'});
  }

};

// Required data: phone
// @TODO Only let an authenticated user delete their object. Dont let them delete update elses.
// @TODO Cleanup (delete) any other data files associated with the user
handlers._users.delete = function(data,callback){
  // Check that phone number is valid
  var phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 11 ? data.queryStringObject.phone.trim() : false;
  if(phone){

    // Get token from headers
    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;

    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(token,phone,function(tokenIsValid){
      if(tokenIsValid){
        // Lookup the user
        _data.read('users',phone,function(err,data){
          if(!err && data){
            _data.delete('users',phone,function(err){
              if(!err){
                callback(200);
              } else {
                callback(500,{'Error' : 'Could not delete the specified user'});
              }
            });
          } else {
            callback(400,{'Error' : 'Could not find the specified user.'});
          }
        });
      } else {
        callback(403,{"Error" : "Missing required token in header, or token is invalid."});
      }
    });
  } else {
    callback(400,{'Error' : 'Missing required field'})
  }
};


// Tokens
handlers.tokens = function(data,callback){
  var acceptableMethods = ['post','get','put','delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
    handlers._tokens[data.method](data,callback);
  } else {
    callback(405);
  }
};

// Container for all the tokens methods
handlers._tokens  = {};

// Tokens - post
// Required data: phone, password
// Optional data: none
handlers._tokens.post = function(data,callback){
  var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 11 ? data.payload.phone.trim() : false;
  var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
  if(phone && password){
    // Lookup the user who matches that phone number
    _data.read('users',phone,function(err,userData){
      if(!err && userData){
        // Hash the sent password, and compare it to the password stored in the user object
        var hashedPassword = helpers.hash(password);
        if(hashedPassword == userData.hashedPassword){
          // If valid, create a new token with a random name. Set an expiration date 1 hour in the future.
          var tokenId = helpers.createRandomString(20);
          var expires = Date.now() + 1000 * 60 * 60;
          var tokenObject = {
            'phone' : phone,
            'id' : tokenId,
            'expires' : expires
          };

          // Store the token
          _data.create('tokens',tokenId,tokenObject,function(err){
            if(!err){
              callback(200,tokenObject);
            } else {
              callback(500,{'Error' : 'Could not create the new token'});
            }
          });
        } else {
          callback(400,{'Error' : 'Password did not match the specified user\'s stored password'});
        }
      } else {
        callback(400,{'Error' : 'Could not find the specified user.'});
      }
    });
  } else {
    callback(400,{'Error' : 'Missing required field(s).'})
  }
};

// Tokens - get
// Required data: id
// Optional data: none
handlers._tokens.get = function(data,callback){
  // Check that id is valid
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if(id){
    // Lookup the token
    _data.read('tokens',id,function(err,tokenData){
      if(!err && tokenData){
        callback(200,tokenData);
      } else {
        callback(404);
      }
    });
  } else {
    callback(400,{'Error' : 'Missing required field, or field invalid'})
  }
};

// Tokens - put
// Required data: id, extend
// Optional data: none
handlers._tokens.put = function(data,callback){
  var id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;
  var extend = typeof(data.payload.extend) == 'boolean' && data.payload.extend == true ? true : false;
  if(id && extend){
    // Lookup the existing token
    _data.read('tokens',id,function(err,tokenData){
      if(!err && tokenData){
        // Check to make sure the token isn't already expired
        if(tokenData.expires > Date.now()){
          // Set the expiration an hour from now
          tokenData.expires = Date.now() + 1000 * 60 * 60;
          // Store the new updates
          _data.update('tokens',id,tokenData,function(err){
            if(!err){
              callback(200);
            } else {
              callback(500,{'Error' : 'Could not update the token\'s expiration.'});
            }
          });
        } else {
          callback(400,{"Error" : "The token has already expired, and cannot be extended."});
        }
      } else {
        callback(400,{'Error' : 'Specified user does not exist.'});
      }
    });
  } else {
    callback(400,{"Error": "Missing required field(s) or field(s) are invalid."});
  }
};


// Tokens - delete
// Required data: id
// Optional data: none
handlers._tokens.delete = function(data,callback){
  // Check that id is valid
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if(id){
    // Lookup the token
    _data.read('tokens',id,function(err,tokenData){
      if(!err && tokenData){
        // Delete the token
        _data.delete('tokens',id,function(err){
          if(!err){
            callback(200);
          } else {
            callback(500,{'Error' : 'Could not delete the specified token'});
          }
        });
      } else {
        callback(400,{'Error' : 'Could not find the specified token.'});
      }
    });
  } else {
    callback(400,{'Error' : 'Missing required field'})
  }
};

// Verify if a given token id is currently valid for a given user
handlers._tokens.verifyToken = function(id,phone,callback){
  // Lookup the token
  _data.read('tokens',id,function(err,tokenData){
    if(!err && tokenData){
      // Check that the token is for the given user and has not expired
      if(tokenData.phone == phone && tokenData.expires > Date.now()){
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
};

// Orders
handlers.orders = function(data,callback){
  var acceptableMethods = ['post','get','put','delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
    handlers._orders[data.method](data,callback);
  } else {
    callback(405);
  }
};

// Containers for all orders
handlers._orders  = {};

// Orders - post
// Required: token, deliveryPhone, deliveryAddress, pickupAddress, pickupPhone
// Optional: none
handlers._orders.post = function(data, callback){
  // Check for required fields
  var deliveryPhone = typeof(data.payload.deliveryPhone) == 'string' && data.payload.deliveryPhone.trim().length == 11 ? data.payload.deliveryPhone.trim() : false;
  var deliveryAddress = typeof(data.payload.deliveryAddress) == 'string' && data.payload.deliveryAddress.trim().length > 0 ? data.payload.deliveryAddress.trim() : false;
  var pickupAddress = typeof(data.payload.pickupAddress) == 'string' && data.payload.pickupAddress.trim().length > 0 ? data.payload.pickupAddress.trim() : false;
  var pickupPhone = typeof(data.payload.pickupPhone) == 'string' && data.payload.pickupPhone.trim().length == 11 ? data.payload.pickupPhone.trim() : false;

  if(deliveryPhone && deliveryAddress && pickupAddress && pickupPhone){
    // Check the token is valid and has not expired
    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;

    // Lookup the user by reading the token
    _data.read('tokens', token, function(err, tokenData){
      if(!err && tokenData){
        var userPhone = tokenData.phone;

        // Check the user profile to see orders
        _data.read('users', userPhone, function(err, userData){
          if(!err && userData){
            var userOrders = typeof(userData.orders) == 'object' && userData.orders instanceof Array ? userData.orders : [];
              // create a random id for the order
              var orderId = helpers.createRandomString(20);
              var orderObject = {
                'id': orderId,
                'userPhone': userPhone,
                'deliveryPhone': deliveryPhone,
                'deliveryAddress': deliveryAddress,
                'pickupAddress': pickupAddress,
                'pickupPhone': pickupPhone
              };

              // Save the order
              _data.create('orders', orderId, orderObject, function(err){
                if(!err){
                  // Add order ID to user's object
                  userData.orders = userOrders;
                  userData.orders.push(orderId);

                  // Save the new user data.
                  _data.update('users', userPhone, userData, function(err){
                    if(!err){
                      // return data about the new order
                      callback(200, orderObject);
                    } else {
                      callback(500, {'Error': 'Could not update the user with the new order'})
                    }
                  });
                } else {
                  callback(500, {'Error': 'Could not create the new order'});
                }
              });
          } else {
            callback(403);
          }
        });
      } else {
        callback(403);
      }
    });
  } else {
    callback(400, {'Error': 'Missing required fields'});
  }
};

// Order - get
// Required data: id
// Optional data: none
handlers._orders.get = function(data, callback){
  // Check that the id is valid
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if(id){
    // Lookup the order
    _data.read('orders', id, function(err, orderData){
      if(!err && orderData){
        // Get token and verify
        var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
        handlers._tokens.verifyToken(token, orderData.userPhone, function(tokenIsValid){
          if(tokenIsValid){
            callback(200, orderData);
          } else {
            callback(403);
          }
        });
      } else {
        callback(403)
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field, or field invalid'});
  }
};

// Orders - put
// Required data: id
// Optional data: deliveryAddress, deliveryPhone, pickupAddress, pickupPhone
handlers._orders.put = function(data, callback){
  var id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;

  // Check for optional data
  var deliveryPhone = typeof(data.payload.deliveryPhone) == 'string' && data.payload.deliveryPhone.trim().length == 11 ? data.payload.deliveryPhone.trim() : false;
  var deliveryAddress = typeof(data.payload.deliveryAddress) == 'string' && data.payload.deliveryAddress.trim().length > 0 ? data.payload.deliveryAddress.trim() : false;
  var pickupAddress = typeof(data.payload.pickupAddress) == 'string' && data.payload.pickupAddress.trim().length > 0 ? data.payload.pickupAddress.trim() : false;
  var pickupPhone = typeof(data.payload.pickupPhone) == 'string' && data.payload.pickupPhone.trim().length == 11 ? data.payload.pickupPhone.trim() : false;
  var state = typeof(data.payload.state) == 'string' && ['pending', 'picked', 'delivered'].indexOf(data.payload.state.trim()) > -1 ? data.payload.state.trim() : false;

  if(id){
    // Error if nothing sent to update
    if(deliveryPhone || deliveryAddress || pickupAddress || pickupPhone || state){
      // Lookup the order
      _data.read('orders', id, function(err, orderData){
        if(!err && orderData){
          var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;

          handlers._tokens.verifyToken(token, orderData.userPhone, function(tokenIsValid){
            if(tokenIsValid){
              if(deliveryPhone){
                orderData.deliveryPhone = deliveryPhone;
              }
              if(deliveryAddress){
                orderData.deliveryAddress = deliveryAddress;
              }
              if(pickupAddress){
                orderData.pickupAddress = pickupAddress;
              }
              if(pickupPhone){
                orderData.pickupPhone = pickupPhone;
              }
              if(state){
                orderData.state = state
              }

              // Stroe the new updates
              _data.update('orders', id, orderData, function(err){
                if(!err){
                  callback(200, orderData);
                } else {
                  callback(500, {'Error': 'Could not update the order.'});
                }
              });
            } else {
              callback(403)
            }
          });
        } else {
          callback(400, {'Error': 'Order ID does not exist'});
        }
      });
    } else {
      callback(400, {'Error': 'Missing fields to update'});
    }
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
};

// Orders - delete
// Required data: id
// optional data: none
handlers._orders.delete = function(data, callback){
  // Get id
  var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;

  if(id){
    // Look up order
    _data.read('orders', id, function(err, orderData){
      if(!err && orderData){
        // get and verfiy the token
        var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
        handlers._tokens.verifyToken(token, orderData.userPhone, function(tokenIsValid){
          if(tokenIsValid){
            _data.delete('orders', id, function(err){
              if(!err){
                _data.read('users', orderData.userPhone, function(err, userData){
                  if(!err){
                    var userOrders = typeof(userData.orders) == 'object' && userData.orders instanceof Array ? userData.orders : [];

                    // Get selected order position(index)
                    var orderPosition = userOrders.indexOf(id);
                    if(orderPosition > -1){
                      userOrders.splice(orderPosition, 1);

                      userData.orders = userOrders;
                      _data.update('users', orderData.userPhone, userData, function(err){
                        if(!err){
                          callback(200);
                        } else {
                          callback(400, {'Error': 'Could not update user'})
                        }
                      });
                    } else {
                      callback(500, {'Error': 'Could not find the order in the user object'});
                    }
                  } else {
                    callback(500, {'Error': 'Could not find user who created the order'});
                  }

                });
              } else {
                callback(500, {'Error': 'Could not delete order'})
              }
            });
          } else {
            callback(403)
          }
        });
      } else {
        callback(404, {'Error': 'Could not find order with specified ID'});
      }
    });
  } else {
    callback(400, {'Error': 'Missing required field'});
  }
};

// Export the handlers
module.exports = handlers;
