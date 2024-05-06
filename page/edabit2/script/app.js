function removeDuplicatesFromArray(arr) {
   let set = new Set(arr);

   let uniqueArray = Array.from(set);

   return uniqueArray;
}

let arr = [1, 3, 4, 3, 6, 7, 8, 5, 4];

let uniqueArray = removeDuplicatesFromArray(arr);

console.log(uniqueArray);
