// Variable can hold data
let number = 2;
let string = "Hello World";
let bool = true;

// And can be referenced by name
let thing = number + 5; // 7
let sentance = string + ", how are you doing today?";

// Variables can be reasigned
number = 6;
number = number + thing; // 13
number = number - 3; // 10

const variable = 8;

variable = 4;

1 + 2;
1 - 2;
1 * 2;
1 / 2;
1 ^ 2;
1 % 2;

true && false;
true || false;
!true;

let sunAboveHorizon = true;
let moonAboveHorizon = false;
let itIsDay = sunAboveHorizon && !moonAboveHorizon;

if (itIsDay) runSomeCode();

// if (numner === 3) {
//     //some stuff
// } else if (number === 4) {

// } else (number >= 5) {

// } else {

// }

"0" == 0; //true
"0" === 0; //false

function max(num1 = "1", num2 = 6) {
  if (num1 > num2) return num1;
  else return num2;
}

let min = function(num1, num2) {
  if (num1 < num2) return num1;
  else return num2;
};

let arr = [1, 2, 3, 2, 4, 6, 2, 3];
arr[3]; // 2

let person = {
  name: Christian,
  birthday: {
    month: September,
    day: {
      key: iddfsg
    }
  }
};

person.name = "Joseph";

// class Circle {
//     constructor(x, y, r) {
//         this.x = x;
//         this.y = y;
//         this.r = r;
//     }
// }

// let circle1 = new Circle(2, 4, 3);
// let circle2 = new Circle(6, 7, 3);

for (let i = 0; i < 5; i++) {}

do {} while (sunAboveHorizon);

people.forEach(person => {
  person.name += "!";
});
