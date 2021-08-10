import Greeter from "../src/greeter";
import JavaScriptGreeter from "../src/jsGreeter";
import LoudGreeter from "../src/loud";
import HtmlGreeter from "../src/html";
import PromptSync from "prompt-sync";

// let myPrompt = PromptSync();
// let greetingPrompt = PromptSync();
// let namePrompt = PromptSync();

// let yourName = myPrompt("What is your name? ");
// let yourGreeting = myPrompt("Enter a greeting. ");

// 
// console.log("Oh! Nice to meet you " + yourName);

// let greeting = greetingPrompt("Enter a greeting: ");
// let name = namePrompt("Enter a name: ");

// console.log(`${greeting} ${name}`);


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
let jsGreet1 = new JavaScriptGreeter("Master");
console.log(jsGreet1.greet("Yoda"))

// JavaScriptGreeter 2 of 3
let jsGreet2 = new JavaScriptGreeter("Greetings");
console.log(jsGreet2.greet("Ken"))

// JavaScriptGreeter 3 of 3
let jsGreet3 = new JavaScriptGreeter("Welcome home");
console.log(jsGreet3.greet("Jane"))

//LoudGreeter 1 of 3
let loud1 = new LoudGreeter("Good bye");
console.log(loud1.greet("Scott"));

//LoudGreeter 2 of 3
let loud2 = new LoudGreeter("WAKE UP");
console.log(loud2.greet("KERRI"));

//LoudGreeter 3 of 3
let loud3 = new LoudGreeter("Good day");
loud3.addVolume();
console.log(loud3.greet("all"));

//HtmlGreeter 1 of 2
let html1 = new HtmlGreeter("Monday, Monday");
console.log(html1.greet("UGH!"));

//HtmlGreeter 2 of 3
let html2 = new HtmlGreeter("August 10","p");
console.log(html2.greet("2021"));

//HtmlGreeter 3 of 3
let html3 = new HtmlGreeter("See ya","div");
console.log(html3.greet("Bob"));


// let myArray = [3,6,8,1,4,9,0];
// myArray.sort();
// console.log(myArray);

let pokemon = [
    {
        name: "pikachu",
        power: 57
    },
    {
        name: "charizard",
        power: 70
    },
    {
        name: "squirtle",
        power: 45
    },
    {
        name: "bulbasaur",
        power: 60
    },
    {
        name: "rattata",
        power: 12
    }
]

pokemon.sort ((a, b) => {
    // return a.power - b.power
    return b.power - a.power;
});
console.log(pokemon[0].name);

let stringArray = ["bear", "dog", "car", "zebra"]
stringArray.sort();
console.log(stringArray);



// test.toLocaleCompare // look into this