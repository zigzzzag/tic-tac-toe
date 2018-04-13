console.log('-----------------------------------------------LET------------------------------------------------------');

var topic = "JavaScript";
if (topic) {
    var topic = "React";
    console.log('var: block', topic) // block React
}
console.log('var: global', topic); // global React

var topic2 = "JavaScript";
if (topic2) {
    let topic2 = "React";
    console.log('let: block', topic2) // block React
}
console.log('var: global', topic2); // global JavaScript

console.log('----------------------------------------------TEMPLATE-------------------------------------------------_');

const lastName = 'Ivanov';
const firstName = 'Ivan';
const middleName = 'Ivanovich';
console.log("use plus: " + lastName + ", " + firstName + ", " + middleName);
console.log(`use template: ${lastName}, ${firstName}, ${middleName}`);

console.log('--------------------------------------------DEFAULTS-PARAMS---------------------------------------------');

function helloWorld(hello = "hello", world = "world") {
    console.log(`${hello} ${world}`);
}

helloWorld();
helloWorld("welcome");
helloWorld("welcome", "to hell");

console.log('--------------------------------------------ARROW-FUNCTIONS---------------------------------------------');

let helloWorldArrow = (hello = "hello", world = "world") => console.log(`arrow: ${hello} ${world}`);
helloWorldArrow();
helloWorldArrow("welcome");
helloWorldArrow("welcome", "to hell");

console.log('--------------------------------------------------------------------------------------------------------');
