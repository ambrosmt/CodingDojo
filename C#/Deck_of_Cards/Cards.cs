using System;

namespace Deck_of_Cards{
    public class Card{
        public string stringVal;
        private string[] nameReference = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
        public string Suit;
        private string[] suitReference = {"Clubs", "Spades", "Hearts", "Diamond" };
        public int Val;
        private int[] valReference = {1,2,3,4,5,6,7,8,9,10,11,12,13};

        public Card(int valIndex, int SuitIndex){
            stringVal = nameReference[valIndex];
            Suit = suitReference[SuitIndex];
            Val = valReference[valIndex];
        }
    }
}