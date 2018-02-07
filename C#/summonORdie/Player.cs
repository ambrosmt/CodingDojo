using System;
using System.Linq;
using System.Collections.Generic;

namespace summonORdie{
    public class Player{
        public List<Card> Hand;
        public Deck mydeck;
        public string name;

        public Player(Deck val){
            Hand = new List<Card>();
            mydeck = val;
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