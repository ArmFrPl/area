

function squareArea (side){
  return side * side;
}
function rectArea (length, width){
  return width * length;
}
function circleArea (radius){
  return radius * radius * Math.PI;
}
function triangleArea (height, base){
  return height * base / 2;
}

module.exports = {

  squareArea,
  rectArea,
  circleArea,
  triangleArea
};