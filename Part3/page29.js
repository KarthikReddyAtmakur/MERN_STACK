// const numbers = [25,21,27,20]
// const result = numbers.some((number)=>number > 20)
// const result = numbers.every((number)=>number > 20)
// console.log(result)

const subjectScore = [50, 45, 90, 30];
// const result = subjectScore.every((score) => score > 40);
const result = subjectScore.some((score) => score > 40);
if (result) console.log("Pass");
else console.log("Fail");