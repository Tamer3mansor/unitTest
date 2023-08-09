const add = () => {
  return "add";
};
const divide = (number1=0, number2=0) => {
  if (number2 == 0) {
    return "Can not divide by zero or null";
  }
  return Math.round(number1 / number2);
};
const arr = [12,6,4,5,9];
// beforeAll >> before all tasks 
// Before each >> before every task
module.exports = { add, divide , arr};

