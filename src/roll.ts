export class Roll {

    public pins: number = 0;

    constructor(pinsFall:number) {
        this.pins = pinsFall;
    }

    public pinsFall() : number {
        return this.pins;
    }
}