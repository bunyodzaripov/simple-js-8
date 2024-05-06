function calculatorPoint(match) {
   let point = 0;

   for (let i = 0; i < match.length; i++) {
      let [score, score2] = match[i].split(":").map(Number);

      if (score > score2) {
         point += 3;
      } else if (score == score2) {
         point += 1;
      }
   }

   return point;
}

let result = [
   "3:1",
   "1:0",
   "0:1",
   "4:4",
   "2:3",
   "4:0",
   "3:4",
   "2:2",
   "2:1",
   "0:0",
];
console.log("Hamma nuqtalar: ", calculatorPoint(result));
