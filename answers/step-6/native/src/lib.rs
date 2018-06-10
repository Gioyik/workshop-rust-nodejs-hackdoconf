#[macro_use]
extern crate neon;
// Export an extern crate
extern crate num_cpus;

use neon::vm::{Call, JsResult};
// Use the JsNumber API
use neon::js::JsNumber;

fn hello(call: Call) -> JsResult<JsString> {
  // Implement an output for num_cpus
  Ok(JsNumber::new(call.scope, num_cpus::get() as f64))
}

register_module!(m, {
  // Export the module to be used in Node.js
  m.export("threading", threading)
});
