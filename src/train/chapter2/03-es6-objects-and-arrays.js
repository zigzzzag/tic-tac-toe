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