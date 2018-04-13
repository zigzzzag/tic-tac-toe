var topic = "JavaScript";
if (topic) {
    var topic = "React";
    console.log('var: block', topic) // block React
}
console.log('var: global', topic); // global React
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var topic2 = "JavaScript";
if (topic2) {
    let topic2 = "React";
    console.log('let: block', topic2) // block React
}
console.log('var: global', topic2); // global JavaScript


