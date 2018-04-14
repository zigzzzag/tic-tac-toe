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

let array = {
    order: ["one", "two", "three", "four", "five"],
    print: function (delay = 1000) {
        setTimeout(() => {
            console.log(this.order.join(","));
        }, delay)
    }
};
array.print();

console.log('-------------------------------------------DESTRUCTING-ASSIGNMENT---------------------------------------');

let sandwitch = {
    bread: "duthc crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};

//console.log(bread, meat);//ReferenceError: bread is not defined

let {bread, meat} = sandwitch;
console.log(bread, meat);

bread = "garlic";
meat = "turkey";

console.log(bread, meat);
console.log(sandwitch.bread, sandwitch.meat);

console.log('------------------------------------------OBJECT-LITERAL-ENHANCEMENT------------------------------------');

let name = "Tallac";
let elevation = 6666;
let print = function () {
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`)
};

print();//Mt. undefined is undefined feet tall
let funHike = {name, elevation, print};
funHike.print();//Mt. Tallac is 6666 feet tall

console.log('--------------------------------------------------------------------------------------------------------');
