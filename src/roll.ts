export class Roll {

    private pins: number = 0;

    constructor(pinsFall:number) {
        this.pins = pinsFall;
    }

    public pinsFall() : number {
        return this.pins;
    }
}