const add = () => {
  return "add";
};
const divide = (number1=0, number2=0) => {
  if (number2 == 0) {
    return "Can not divide by zero or null";
  }
  return Math.round(number1 / number2);
};
module.exports = { add, divide };

console.log(divide());
