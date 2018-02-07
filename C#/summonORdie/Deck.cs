using System.Collections.Generic;
using System.Linq;
using System;

namespace summonORdie{
    public class Deck{

        public List<Card> cards;

        // public Deck(){}
        public List<Card> MakeDeck(){
            cards = new List<Card>();
            IEnumerable<int> SuitRng = Enumerable.Range(0,5);
            IEnumerable<int> ValRng = Enumerable.Range(0, 5);
            foreach(int suit in SuitRng){
                foreach(int val in ValRng){
                    cards.Add(new Card(val,suit));
                }
            }
            return cards;
        }
        public Card selectTop(){
            Card temp = cards.First();
            cards.RemoveAt(0);
            return temp; 
        }
    }
}