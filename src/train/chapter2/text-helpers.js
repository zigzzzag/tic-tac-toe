export const print = (message) => log(message, new Date());

export const log = (message, timestamp = new Date()) =>
console.log(`${timestamp.toString()}: ${message}`)
