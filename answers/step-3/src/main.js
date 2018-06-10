var ffi = require('ffi');

var lib = ffi.Library('target/debug/libby_two', {
  'by_two': [ 'int', [ 'int' ] ]
});

// Define the output and pass the argument to operate with
var output = lib.by_two(4);

// Print the output of the operation
console.log(output);
