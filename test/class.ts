class MyClass {

    constructor (greeting) {
        this.greeting =greeting;
    };
    print (name) {
        return console.log(this.greeting + " " + name);
    };

};
