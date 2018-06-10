const ffi = require('ffi');
// Add the path to the Rust lib
const lpath = '';

const libCalculator = ffi.Library(lpath, {
    'add': [ 'int32', [ 'int32', 'int32' ] ],
    'subtract': [ 'int32', [ 'int32', 'int32' ] ],
    'multiply': [ 'int32', [ 'int32', 'int32' ] ]
});

// Import the methods from the Rust lib and operate
const {  } = libCalculator;

// Print the operations
