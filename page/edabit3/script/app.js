function greeting(name, num) {
   if (num === 1) {
      return "Hello " + name;
   } else if (num === 0) {
      return "Bye " + name;
   } else {
      return "Invalid input";
   }
}

console.log(greeting("Alon", 1));
console.log(greeting("Tom", 0));
console.log(greeting("Jose", 0));
