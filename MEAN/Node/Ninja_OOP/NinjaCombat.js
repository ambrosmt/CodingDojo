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
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nStrength: ${this.strength}\nSpeed: ${this.speed}\n`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        console.log(`Banzai!\n${this.name} has ${this.health}.\n`);
        return this;
    }
    punch (target){
        if(target instanceof Ninja){
            console.log(`${target.name} was punched by ${this.name}!\n${target.name} lost 5 health.\n`);
            target.health -= 5;
            return this;
        }
        console.log(`${this.name}, you must target another ninja ...`);
        return this;
    }
    kick(target) {
        if (target instanceof Ninja) {
            console.log(`${target.name} was kicked by ${this.name}!\n${target.name} lost 15 health.\n`);
            target.health -= 15;
            return this;
        }
        console.log(`${this.name}, you must target another ninja ...`);
        return this;
    }
}

ninja1 = new Ninja("Hikaru");
ninja2 = new Ninja("Talon");
ninja2.punch(ninja1);
ninja1.showStats();
ninja1.punch("help");
ninja1.kick(ninja2);
ninja2.showStats();