var ffi = require('ffi');

var lib = ffi.Library('target/debug/libby_two', {
  'by_two': [ 'int', [ 'int' ] ]
});

// Define the output and pass the argument to operate with

// Print the output of the operation
