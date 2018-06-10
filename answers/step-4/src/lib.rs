#[no_mangle]
pub fn add(first: i32, second:i32) -> i32 {
  // Sum operation
  first + second
}

#[no_mangle]
pub fn subtract(first: i32, second:i32) -> i32 {
  // Rest operation
  first - second
}

#[no_mangle]
pub fn multiply(first: i32, second:i32) -> i32 {
  // Multiply operation
  first * second
}
