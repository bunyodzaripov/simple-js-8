let arr = ["john", "jack", "alex", "devid", "jony"];
function chartUsers(array) {
   if (array.length == 0) {
      return "no one online";
   }
   if (array.length == 1) {
      return array[0] + "online";
   }
   if (array.length == 2) {
      return array[0] + " and " + array[1] + " online";
   }
   if (array.length > 2) {
      return (
         array[0] +
         " , " +
         array[1] +
         " and " +
         (array.length - 2) +
         " more online"
      );
   }
}
let chartOnlineUsers = chartUsers(arr);
console.log(chartOnlineUsers);
