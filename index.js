/*
function introduction(name1) {
  console.log(`My name is ${name1}`);
}

introduction("Daniel");
*/

/*
function logTwoValues(value1, value2) {
  console.log(`The two values are ${value1} and ${value2}.`);
}

logTwoValues(30, 50);
*/

/*
function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Daniel");
*/

function introductionWithLanguageOptional(name, language = "Javascript") {
  console.log(`Hi, my name is ${name} and I am learning ${language}`);
}

introductionWithLanguageOptional("Daniel");
