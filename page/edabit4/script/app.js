function isSymmetrical(number) {
   let numStr = number.toString();

   let numReverse = numStr.split("").reverse().join("");

   if (numStr === numReverse) {
      return true;
   } else {
      return false;
   }
}

console.log(isSymmetrical(123));

console.log(isSymmetrical(12321));

console.log(isSymmetrical(6776));

console.log(isSymmetrical(1234567));

console.log(isSymmetrical(123456789));

console.log(isSymmetrical(1234567890));
