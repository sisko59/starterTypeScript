import {Roll} from "./roll"

export class Game {
    private rolls: Array<Roll> = [];

    public roll(pin: number) {
        this.rolls.push(new Roll(pin));
    }

    public score() : number {
        return this.rolls
                .map(rool => rool.pinsFall())
                .reduce((sum, current) => sum + current);
    }
}