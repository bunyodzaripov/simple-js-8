function secretSocietyName(name) {
   let names = "";

   name.forEach((name) => {
      names += name[0];
   });

   return names;
}

let name = ["Jack", "John", "Micheal", "Rock", "Alex", "Devid"];

let names = secretSocietyName(name);

console.log(names);
