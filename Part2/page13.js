const obj = {
  name: "Wipro",
  lastPrice: 200,
  currPrice: 250,
};
function calc(obj) {
  console.log(obj.lastPrice);
  obj.growth = obj.currPrice - obj.lastPrice;
  obj.growthper = (obj.growth * 100) / obj.lastPrice;
  console.log(obj);
}
calc(obj)