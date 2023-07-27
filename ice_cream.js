let stocks = {
  fruits: ["strawberry", "banana", "apple", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruits_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruits_name]} was selected`);
    call_production();
    // when we put the call_production function inside setTimeout the console.log above is sync hence that will run first and then only the call_production will run
  }, 4000);
  //console.log("Order placed going for producion");
};

let producion = () => {
  // this funcion is called callback hell
  // this function also becomes async
  setTimeout(() => {
    console.log("producing");
    setTimeout(() => {
      console.log("fruits are chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, producion);
