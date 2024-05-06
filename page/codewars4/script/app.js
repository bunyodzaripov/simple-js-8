function sheepMissing(arrsheep) {
   let count = 0;

   for (let i = 0; i < arrsheep.length; i++) {
      if (arrsheep[i] === false) {
         count++;
      }
   }

   return count;
}

let sheep = sheepMissing[(true, true, true, false, true)];

console.log("Hozirda yo'q qo'ylar soni: ", sheepMissing(sheep));
