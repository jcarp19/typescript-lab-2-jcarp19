import {Greeter} from "../src/greeter";
import {JavaScriptGreeter} from "../src/jsGreeter";

// Greeting Test 1 of 3
let greet1 = new Greeter("Hello");
console.log(greet1.greet("Jim"));

// Greeting Test 2 of 3
let greet2 = new Greeter("May the force be with you");
console.log(greet1.greet("Spock"));

// Greeting Test 3 of 3
let greet3 = new Greeter("Happy Birthday");
console.log(greet1.greet("Luke"));


// JavaScriptGreeter 1 of 3
let jsGreet1 = new JavaScriptGreeter("console.log");
console.log(jsGreet1.greet(`("String");`))