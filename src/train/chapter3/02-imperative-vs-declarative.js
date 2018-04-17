let string = "This is the midday show with Cheryl Waters";
let urlFriendly = "";

for (let i = 0; i < string.length; i++) {
    if(string[i] === " ") {
        urlFriendly += "-";
    } else {
        urlFriendly += string[i];
    }
}

console.log(urlFriendly);

urlFriendly = string.replace(/ /g, "-");
console.log(urlFriendly);