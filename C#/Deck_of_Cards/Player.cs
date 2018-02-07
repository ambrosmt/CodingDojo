using System;
using System.Linq;
using System.Collections.Generic;

namespace Deck_of_Cards{
    public class Player{
        public List<Card> Hand;

        public string name;

        public Player(string val){
            name = val;
            Hand = new List<Card>();
        }
        public Card Draw(Deck deck){
            Card drew = deck.selectTop();
            Hand.Add(drew);
            return drew;
        } 
        
        public Card Discard(int CardIdx){
            var trash = Hand.ElementAtOrDefault(CardIdx);
            try{
            Hand.RemoveAt(CardIdx);
            }
            catch(System.ArgumentOutOfRangeException){return null;}
            return trash; 
        }
    }
}