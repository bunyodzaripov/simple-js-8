function theForestgenerate(n) {
   let arr = [0, 1];

   for (let i = 2; i <= n; i++) {
      let next = arr[i - 1] + arr[i - 2];

      arr.push(next);
   }

   return arr;
}

let n = 8;

let result = theForestgenerate(n);

console.log(result);
