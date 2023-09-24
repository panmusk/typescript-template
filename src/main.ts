type Greeting = "Hello" | "Welcome" | "Good morning" | "Godd afternoon";
class Greeter {
    Greeting: Greeting;
    Name: string;
    constructor(greet: Greeting, name: string) {
        this.Greeting = greet;
        this.Name = name;
    }
    SayGreeting(): number {
        console.log(`${this.Greeting}, ${this.Name}!`);
        return 0;
    }
}
let greeter = new Greeter("Hello", "World");
process.exit(greeter.SayGreeting());