// js runs frm top to bottom

console.log("1");
//console.log("2");
setTimeout(() => {
  // async function hence wont effect the rest of the process
  console.log("2");
}, 4000);
console.log("3");
console.log("4");
