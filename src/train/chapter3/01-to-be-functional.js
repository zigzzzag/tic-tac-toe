const insideFn = logger =>
    logger("They can be sent to other functions as arguments");

insideFn(message => console.log(message.toUpperCase() + "!!!"));

console.log('---------------------------------------------------------------------------------------------------------');

let createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!");
    }
};

const scream = createScream(message => console.log(message));

scream('functions can be returned from other functions');
scream('createScream returns a function');
scream('scream invokes that returned function');

console.log('----------------------------------------------ES-6-------------------------------------------------------');

const createScreamEs6 = logger => message =>
    logger("arrow: " + message.toUpperCase() + "!!!");

const screamEs6 = createScreamEs6(message => console.log(message));

screamEs6('functions can be returned from other functions');
screamEs6('createScream returns a function');
screamEs6('scream invokes that returned function');
