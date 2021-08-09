export default class Greeter {
    greeting: string;

    constructor(greeting: string) {
        this.greeting = greeting;
    };
    greet(name: string) {
        // It returns the composed greeting based on the greeting property and name parameter. Use this format: "{greeting}, {name}!".
        return `${this.greeting}, ${name}!`;
    }
};