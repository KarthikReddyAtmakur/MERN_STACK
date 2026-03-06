// const stock = {
//   name: "Wipro",
//   lastPrice: 200,
//   currPrice: 250,
//   growth: function () {
//     return this.currPrice - this.lastPrice;
//   },
//   growthPercent: function () {
//     return this.growth() / this.lastPrice * 100;
//   },
// };
// console.log(stock.growthPercent());


const stock = {
  name: "Wipro",
  lastPrice: 200,
  currPrice: 250,
  growth: () => this.currPrice - this.lastPrice,
  growthPercent: () => (this.growth() / this.lastPrice) * 100,
};
console.log(stock.growthPercent()); //Error