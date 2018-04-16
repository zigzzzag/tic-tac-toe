console.log('-------------------------------------------JAVASCRIPT---------------------------------------------------');

function Vacation(destination, length) {
    this.destination = destination;
    this.length = length;
}

Vacation.prototype.print = function () {
    console.log(this.destination + " | " + this.length + " days")
};

let maui = new Vacation("Maui", 7);
maui.print();

console.log('-------------------------------------------ES-6---------------------------------------------------------');

class NewVacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log("New " + this.destination + " | " + this.length + " days")
    }
}

let tai = new NewVacation("tai", 12);
tai.print();
