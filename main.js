const reader = require('readline-sync');
const area = require('./area.js');

console.log("Supported Shapes are:");
console.log("1: Circle, 2: Rectangle");
console.log("3: Square, 4: Triangle");

const opt = reader.questionInt("What is your choice of shape? ");
let result;

switch (opt) {
  case 1:
    const radius = reader.questionInt("Radius =  ");
    result = area.circleArea(radius);
    break;
  case 2:
    const width = reader.questionInt("Width =  ");
    const length = reader.questionInt("Length =  ");
    result = area.rectArea(length, width);
    break;
  case 3:
    const side = reader.questionInt("Side =  ");
    result = area.squareArea(side);
    break;
  case 4:
    const base = reader.questionInt("Base =  ");
    const height = reader.questionInt("Height =  ");
    result = area.triangleArea(height, base);
    break;
  default:
    console.log("Type is not supported!");
}

if(result){
  console.log("Result = " + result)
}