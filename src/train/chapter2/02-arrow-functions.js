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