let stocks = {
  fruits: ["strawberry", "banana", "apple", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let toppings_fun = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("chal gaya bete"));
    }, 2000);

    //resolve(console.log("chal gaya bete"));
  });
};

// let toppings_fun = () => {
//   return setTimeout(() => {
//     console.log("chal gaya bete");
//   }, 2000);
// };

// the await toppings_fun() inside the order function will pause the execution of the order function until the promise returned by toppings_fun resolves. After the 2 seconds delay, it will continue with the rest of the code and print "D" and "E" after "chal gaya bete" while the await function gets resolved the sync functions will continue to work This allows your program to be more efficient by not blocking the event loop.
async function order() {
  console.log("A");
  console.log("B");
  console.log("C");
  await toppings_fun();
  console.log("D");
  console.log("E");
}

order();

console.log("Doing the dishes");
console.log("cleaning the ingredients");
