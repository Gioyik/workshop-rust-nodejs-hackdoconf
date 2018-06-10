const ffi = require('ffi');
// Add the path to the Rust lib
const lpath = 'target/release/libnode_rust_calculator.dylib';

const libCalculator = ffi.Library(lpath, {
    'add': [ 'int32', [ 'int32', 'int32' ] ],
    'subtract': [ 'int32', [ 'int32', 'int32' ] ],
    'multiply': [ 'int32', [ 'int32', 'int32' ] ]
});

// Import the methods from the Rust lib and operate
const { add, subtract, multiply } = libCalculator;

// Print the operations
console.log('4 + 2 = ', add(4, 2));
console.log('4 - 2 = ', subtract(4, 2));
console.log('4 * 2 = ', multiply(4, 2));
