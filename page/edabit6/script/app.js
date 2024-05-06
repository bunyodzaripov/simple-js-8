function numbersSeparated(str) {
   let numbers = str.split(/[,\s]+/);

   let sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);

   return sum;
}

let numbersString = "1,2,3,4,5,6";

let result = numbersSeparated(numbersString);

console.log(result);
