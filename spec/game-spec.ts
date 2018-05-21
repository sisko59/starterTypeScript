import {Game} from "../src/game"

describe("Calculate bowling's score", () => {

    it("should be 0", () => {
        const game = new Game();
        for (var rollNumber = 0; rollNumber < 20; rollNumber++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(0);
    });

    it("Should be 20", () => {
        const game = new Game();
        for (var rollNumber = 0; rollNumber < 20; rollNumber++) {
            game.roll(1);
        }
        expect(game.score()).toEqual(20);
    });

} );