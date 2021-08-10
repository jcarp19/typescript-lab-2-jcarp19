import LoudGreeter from "../src/loud";

describe("Loud Tests", () => {
    test("Loud test - Yo", () => {
        // Arrange 
        let loud1 = new LoudGreeter("Yo");
        // Act

        // Assert
        expect(loud1.greet("Man")).toBe("Yo, Man!!");

    });

    test("Loud test - Hey", () => {
        // Arrange 
        let loud2 = new LoudGreeter("Hey");
        // Act
        loud2.addVolume();
        // Assert
        expect(loud2.greet("Man")).toBe("Hey, Man!!!");
        //Act
        loud2.addVolume();
        // Assert
        expect(loud2.greet("Man")).toBe("Hey, Man!!!!");

    });
});
