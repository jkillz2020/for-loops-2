

// for (var number =5; number <= 130; number = number + 10) {

// console.log("Current value is", number);
// }

// for (var number2 = 4096; number2 >= 1; number2 = number2 / 2) {
//   console.log("Current value is", number2);
// }

var presidents = ["George Washington", "John Adams", "Thomas Jefferson"];
var number = [1, 2, 3]

for (var i= 0; i < presidents.length; i++) {
var output = "President # " + number[i] + " was " + presidents[i];
  console.log(output);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
for (var key in antSpecies) {
  console.log("Ant Species " + key);
}
