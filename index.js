// //Objects -> Overview

// //Primative Value :- is basically, not an object --- is a string,number,string,boolean.

// // Data
// // var person = {};
// // Try using const !!

// //Arrays
// var person = [];
// var plea = "wouldShe";

// person.name = "Mrs. White";

// person["plea"] = "I would never!";

// // person[0] = "I was not in the Billards room";

// // console.log(who);
// person.plea;

// // Non Valid Character
// var box = {
//   material: "Cardboard",
//   0: "meow",
// };

// Game Character Solution

var game = {};

game.murderer = "??";

// Properties for Weapons
game["weapons"] = [
  { type: "Lasers", location: "lab" },
  { type: "Angry Cats" },
  { ..."dish Soap" },
];

game.name = [];
game.name[0] = "Miss Scarlet";

game.name.push("Mr. Green");

//Exercise

// 1. Create an Object that looks like this:

// {"name":"Rusty","room":"Kitchen", "weapon": "Candlestick"}

const { name, weapon, room } = {
  name: "Rusty",
  room: "Kitchen",
  weapon: "Candlestick",
};

//Swap variable easily without temp
var a = 1,
  b = 2;

// var temp = a;
// a = b;
// b = temp;
// console.log(a, b);

[b, a] = [a, b];
// console.log(a, b);

// Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];

console.log("a:", a, "b:", b, "c:", c, "d:", d);
console.log(c);

// List Transformation
