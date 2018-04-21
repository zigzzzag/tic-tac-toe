export const compose = (...fns) =>
    (arg) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        );

const civilianHours = (template) =>
    template.replace("hh", "11")
        .replace("mm", "22")
        .replace("ss", "33");

const appendAMPM = (template) =>
    template.replace("tt", "PM");

const both = compose(
    civilianHours,
    appendAMPM
);

const template = "hh:mm:ss tt";

console.log(both(template));
