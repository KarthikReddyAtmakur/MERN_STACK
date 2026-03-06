const stock = [
  {
    name: "Wipro",
    lastPrice: 200,
    currPrice: 250,
  },
  {
    name: "Deloite",
    lastPrice: 100,
    currPrice: 150,
  },
];
function calc(obj) {
  console.log(obj.lastPrice);
  obj.growth = obj.currPrice - obj.lastPrice;
  obj.growthper = (obj.growth * 100) / obj.lastPrice;
  console.log(obj);
}
calc(stock[0])
calc(stock[1])