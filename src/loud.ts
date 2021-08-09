import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {
    private extra: string;

    constructor(greeting: string, extra: string) {
        super(greeting);
        this.greeting = greeting;
        this.extra = extra;
    };
    addVolume(): void {
        this.extra = "!";
    };
    greet() {
        return this.greeting + this.extra;
    };
}