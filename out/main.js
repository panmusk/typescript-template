"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Greeter {
    constructor(greet, name) {
        this.Greeting = greet;
        this.Name = name;
    }
    SayGreeting() {
        console.log(`${this.Greeting}, ${this.Name}!`);
        return 0;
    }
}
let greeter = new Greeter("Hello", "World");
process.exit(greeter.SayGreeting());
//# sourceMappingURL=main.js.map