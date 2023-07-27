function one(fun_two) {
  // callback function
  console.log("Step 1 completed");
  fun_two();
}

function two() {
  console.log("Step 2");
}

one(two);
//two();
