let stocks = {
  fruits: ["strawberry", "banana", "apple", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
const storeopen = false;
// whenever a function is returnig a promise there can be multiple .then functions for the function returning a promise
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (storeopen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log(`sorry darling`));
    }
  });
};

order(2000, () => console.log(`We want to order ${stocks.fruits[0]}`)) // all the .then following functions are of this promise function
  .then(() => {
    return order(0, () => console.log(`production started`)).then(() => {
      return console.log(`dhat teri`); // this then function is of this order function and not of the original function
    });
  })

  .then(() => {
    // .then function is a built in method of promise which takes a function as a parameter and then it executes that function passed
    return order(2000, () => console.log(`the fruit was chopped`));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`)
    );
  })

  .then(() => {
    return console.log("chal");
  })

  .then(() => {
    return console.log("okay");
  })

  .catch(() => {
    console.log("customer left");
  });
