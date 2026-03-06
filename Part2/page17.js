// function outer(){
//     let n=1
//     function inner(){
//         return n++
//     }
//     return inner
// }
// const f = outer()
// console.log(f())
// console.log(f())

// function outer() {
//   let password = "1234";
//   function inner(pwd) {
//     if (pwd === password) {
//       return "Access Granted";
//     } else {
//       return "Access Denied";
//     }
//   }
//   return inner;
// }
// const chkPassword = outer();
// console.log(chkPassword("abcd"));

function outer() {
  let password = "1234";
  function inner(pwd) {
   return pwd === password ? "Access Granted" : "Access Denied";
  }
  return inner;
}
const chkPassword = outer();
console.log(chkPassword("abcd"));