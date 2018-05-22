import {Frame} from "../src/Frame";

export class Game {

    private pins: number = 0;
    private frames: Frame[] = [];
    private index: number = 0;
    private previousFrame: Frame;
    private currentFrame: Frame;

    public roll(pins: number): void {
        this.pins += pins;
        if (this.index % 2 === 0) {
            this.currentFrame = new Frame();
        }
        this.currentFrame.roll(pins);
    }

    public score(): number {
        return this.pins;
    }

}
