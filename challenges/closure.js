// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 


//nestedFunction() can access the variable internal because of closure. Because the function is inside of myFunction(), it has access to myFunction()'s scope, which includes variables inside of it.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function summation(number){
  let result = 0;

  function counter(number){
    for(let i = 0; i <= number; i++){
      result += i;
    }
    return result;
  }
  counter(number);
  return result;
}

console.log(summation(4));