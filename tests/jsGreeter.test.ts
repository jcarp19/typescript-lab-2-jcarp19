import JavaScriptGreeter from "../src/jsGreeter";

describe("JavaScript Tests", () => {
    test("JavaScript test - Welcome", () => {
        // Arrange
        let jsGreet1 = new JavaScriptGreeter("Welcome");
        // Act

        // Assert
        expect(jsGreet1.greet("Home")).toBe("console.log(Welcome, Home!)");
    })

    test("JavaScript test - Good bye", () => {
        // Arrange
        let jsGreet1 = new JavaScriptGreeter("Good bye");
        // Act
    
        // Assert
        expect(jsGreet1.greet("Bill")).toBe("console.log(Good bye, Bill!)");
    })
});


