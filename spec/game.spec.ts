import {Game} from "../src/Game";

// https://jasmine.github.io/2.0/introduction.html

describe("Un game comptabilise le score", () => {
    it("Should be defined.", () => {
        const myGame = new Game();
        expect(myGame.score()).toBe(0);
    });
    it("Should be defined.", () => {
        const myGame = new Game();
        myGame.roll(3);
        myGame.roll(2);
        expect(myGame.score()).toBe(5);
    });
    it("double le score pour le premier jet après un spare", () => {
        const myGame = new Game();
        myGame.roll(5);
        myGame.roll(5);
        myGame.roll(3);
        myGame.roll(2);
        expect(myGame.score()).toBe(18);
    });
} );
