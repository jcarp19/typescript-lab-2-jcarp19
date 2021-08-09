import Greeter from "../src/greeter";

describe("Greeter Tests", () => {
    test("Greeter test - Jim", () => {
        // Arange
        let greet1 = new Greeter("Hello");
        // Act

        // Assert
        expect(greet1.greet("Jim")).toBe("Hello, Jim!");
    });

    test("Greeter test  - Spock", () => {
        // Arange
        let greet2 = new Greeter("May the force be with you");
        // Act
        
        // Assert
        expect(greet2.greet("Spock")).toBe("May the force be with you, Spock!");
    });
});