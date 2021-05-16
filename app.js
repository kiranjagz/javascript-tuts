const helperModule = require('./helper.functions');
const helperModuleTwo = require('./helper.functions.two');

var add = helperModule.addTwoNumbers(1, 2);
console.log(add);
var subtract = helperModule.subtractTwoNumbers(4, 2);
console.log(subtract);
var displayName = helperModule.printString("bobbi");

var addTwo = helperModuleTwo.add(1, 2);
console.log(addTwo);
var subtractTwo = helperModuleTwo.subtract(2, 0);
console.log(subtractTwo);