class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this._speed = 3;
        this._strength = 3;

    }
    get speed() {
        return this._speed;
    }
    get strength() {
        return this._strength;
    }
    sayName() {
        console.log(`\nKonichiwa, watashi wa ${this.name} desu.\n`);
    }
    showStats() {
        console.log(`\nName: ${this.name}\nHealth:${this.health}\nStrength: ${this.strength}\nSpeed: ${this.speed}`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        console.log(`\nBanzai!\n${this.name} has ${this.health} health.`);
    }
}

class Sensei extends Ninja {
    constructor (name){
        super(name);
        this.health = this.health *2;
        this._speed = 10;
        this._strength = 10;
        this._wisdom = 10;
    }
    get speed() {
        return this._speed;
    }
    get strength() {
        return this._strength;
    }
    get wisdom(){
        return this._wisdom;
    }
    speakWidsom(){
        this.drinkSake();
        console.log("Words without Wisdom are Wisdomless Words");
        return this;
    }
    showStatsExtension(){
        console.log(`Wisdom: ${ this.wisdom }`);
        return this;
    }
    showStats(){
        super.showStats().showStatsExtension();
    }
}

superSensei = new Sensei("Master Roshi");
superSensei.sayName();
superSensei.showStats();
superSensei.speakWidsom();