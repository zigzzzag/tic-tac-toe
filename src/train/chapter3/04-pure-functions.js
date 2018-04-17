let frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};

function selfEducate() {
    frederick.canRead = true;
    frederick.canWrite = true;
    return frederick
}

selfEducate();
console.log(frederick);

console.log('-------------------------------------------------------CURRENT_VALUE_TRUE-------------------------------');

const selfEducate2 = (person) => {
    person.canRead = false;
    person.canWrite = false;
    return person
};
console.log(selfEducate2(frederick));
console.log(frederick);

console.log('-------------------------------------------------------CURRENT_VALUE_FALSE------------------------------');

const selfEducate3 = person =>
    ({
        ...person,
        canRead: true,
        canWrite: true
    });

console.log(selfEducate3(frederick));
console.log(frederick);
