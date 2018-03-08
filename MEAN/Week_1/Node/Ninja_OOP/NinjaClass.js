class Ninja {
    constructor (name){
        this.name = name;
        this.health = 100;
        this._speed = 3; 
        this._strength = 3;
        
    }
    get speed(){
        return this._speed;
    }
    get strength() {
        return this._strength;
    }
    sayName() {
        console.log(`\nKonichiwa, watashi wa ${this.name} desu.\n`);
    }
    showStats() {
        console.log(`Name: ${this.name}\nHealth:${this.health}\nStrength: ${this.strength}\nSpeed: ${this.speed}\n`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`Banzai!\n${this.name} has ${this.health}.\n`);
    }
}

ninja1 = new Ninja("Hikaru");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();