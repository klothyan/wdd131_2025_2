const PI = 3.14;
const radius = 3;
let area = 0;

area = radius * radius * PI;
console.log("Area:", area);

let newRadius = 4;
area = newRadius * newRadius * PI;
console.log("Area2:", area);

function circleArea(radius) {
  return radius * radius * PI;
}

area = circleArea(3);
console.log("Area1:", area);

area = circleArea(4);
console.log("Area2:", area);
