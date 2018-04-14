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

// print();//TypeError: Cannot read property 'name' of undefined
let funHike = {name, elevation, print};
funHike.print();//Mt. Tallac is 6666 feet tall

console.log('------------------------------------------SPREAD-OPERATOR-----------------------------------------------');

let lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
let [first, second, ...rest] = lakes;
console.log(`first: ${first}`);
console.log(`second: ${second}`);
console.log(rest.join(','));

let person = {
    pFirsName: "Maxim",
    pSecondName: "Nikiforov"
};
let pMiddleName = "Olegovich";
let pFullName = {
    ...person,
    pMiddleName
};
console.log(pFullName);

console.log('-------------------------------------------PROMISES-----------------------------------------------------');

//todo fix this
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () =>
        (request.status === 200) ?
            resolves(JSON.parse(request.response).results) :
            reject(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send()
});
getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error("cannot load members from randomuser.me"))
);

console.log('--------------------------------------------------------------------------------------------------------');
