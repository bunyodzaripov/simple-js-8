function contactChars(str) {
   let juftChars = "";

   let toqChars = "";

   for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
         juftChars += str[i];
      } else {
         toqChars += str[i];
      }
   }

   return juftChars + toqChars;
}

let result = contactChars("assfdausnuighuts");

console.log(result);
