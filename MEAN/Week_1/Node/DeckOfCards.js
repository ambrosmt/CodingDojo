class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
    get allSuits(){
        return this._allSuits;
    }
    get allValues() {
        return this._allValues;
    }
}
class Deck {
    constructor(size = 52){
        this.size = size;
        this.stack = [];
        this._allSuits = ['Hearts', 'Diamond','Spades', 'Clubs']
        this._allValues = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        this.reset();
    }
    reset(){
        var count = 0;
        var valueIdx = 0;
        var suitIdx = 0;
        while(this.size > count){
            if(valueIdx == 13){
                suitIdx++;
                valueIdx = 0;
            }
            this.stack.push(new Card(
                this._allSuits[suitIdx],
                this._allValues[valueIdx]
            ));
            valueIdx++
            count++;
        }
        return this;
    }
    shuffle(){
        var m = this.size, t, i;
        var deck = this.stack;
        while(m){
            i = Math.floor(Math.random() * m--);
            t = deck[m];
            deck[m] = deck[i];
            deck[i] = t;
        }
        return this;
    }
    deal(count=1){
        var draw = []
        while(count > 0){
            var deck = this.stack;
            this.size--;
            draw.push(deck[this.size]);
            deck.pop();
            count--;
        }
        return draw;
    }
}
class Player{
    constructor(name){
        this._name = name;
        this.hand = [];
    }
    get name(){
        return this._name;
    }
    draw(count, Deck){
        Deck.deal(count).forEach(card => {
            this.hand.push(card);            
        });
        return this;
    }
    discard(idx){
        this.hand[idx] = null;
    }
}

testDeck = new Deck();
testDeck.shuffle();
playerOne = new Player("bob");
playerOne.draw(5, testDeck);
playerOne.discard(1);