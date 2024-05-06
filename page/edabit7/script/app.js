let a = +prompt("A son kiriting");

let b = +prompt("B son kiriting");

let c = +prompt("C son kiritng");

let arr = [];

arr.push(a);

arr.push(b);

arr.push(c);

function calculator() {
   for (let i = 0; i <= c; i++) {
      if (arr[i] > c) {
         return a + b;
      } else {
         console.log("Foydalanuvchi siz kiritgan son xato");
      }
   }
}

let result = calculator();

console.log(result);
