import { Greeter } from "./greeter";

export class HtmlGreeter extends Greeter {
    tagName: string;

    constructor(greeting: string, tagName: string = "h1") {
        super(greeting);
        this.greeting = greeting;
        this.tagName = tagName;
    };
    greet() {
        return `<${this.tagName}>${this.greeting}</${this.tagName}>`;
    };

}