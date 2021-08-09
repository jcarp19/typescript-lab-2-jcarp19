import {Greeter} from "../src/greeter";
import {JavaScriptGreeter} from "../src/jsGreeter";
import {LoudGreeter} from "../src/loud";
import {HtmlGreeter} from "../src/html";

// Greeting Test 1 of 3
let greet1 = new Greeter("Hello");
console.log(greet1.greet("Jim"));

// Greeting Test 2 of 3
let greet2 = new Greeter("May the force be with you");
console.log(greet2.greet("Spock"));

// Greeting Test 3 of 3
let greet3 = new Greeter("Beam up");
console.log(greet3.greet("Luke"));


// JavaScriptGreeter 1 of 3
let jsGreet1 = new JavaScriptGreeter("console.log");
console.log(jsGreet1.greet(`("String");`))

// JavaScriptGreeter 2 of 3
let jsGreet2 = new JavaScriptGreeter("For ");
console.log(jsGreet2.greet(`(let i = 0; i < 10; i++) {};`))

// JavaScriptGreeter 3 of 3
let jsGreet3 = new JavaScriptGreeter("day === Saturday");
console.log(jsGreet3.greet(` ? "Smile" : "Frown";`))

//LoudGreeter 1 of 3
let loud1 = new LoudGreeter("Yo", "!");
console.log(loud1.greet());

//HtmlGreeter 1 of 2
let html1 = new HtmlGreeter("Monday, Monday", "h1");
console.log(html1.greet());
//HtmlGreeter 1 of 2
let html2 = new HtmlGreeter("August 9, 2021","p");
console.log(html2.greet());