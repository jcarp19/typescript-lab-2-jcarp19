import HtmlGreeter from "../src/html";

describe("HTML tests", () => {
    test("html test <p>", () => {
        // Arrange
        let html1 = new HtmlGreeter("Yo", "p");

        // Act

        // Assert
        expect(html1.greet("Jim")).toBe("<p>Yo, Jim!</p>");
    });

    test("html test <div>", () => {
        // Arrange
        let html2 = new HtmlGreeter("Yo", "div");

        // Act

        // Assert
        expect(html2.greet("Jim")).toBe("<div>Yo, Jim!</div>");
    });

    test("html test <h1> deafult", () => {
        // Arrange
        let html3 = new HtmlGreeter("Yo");

        // Act

        // Assert
        expect(html3.greet("Jim")).toBe("<h1>Yo, Jim!</h1>");
    });
});
