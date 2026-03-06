function greet(name, callback) {
  callback();
  console.log(`Welcome ${name}`)
}
greet("Akshaya", () => {
  console.log("Hello");
});