#[macro_use]
extern crate neon;
// Export an extern crate

use neon::vm::{Call, JsResult};
// Use the JsNumber API


fn hello(call: Call) -> JsResult<JsString> {
  // Implement an output for num_cpus

}

register_module!(m, {
  // Export the module to be used in Node.js

});
