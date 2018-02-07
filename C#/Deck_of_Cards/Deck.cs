using System.Collections.Generic;
using System.Linq;
using System;

namespace Deck_of_Cards{
    public class Deck{

        public string name;

        public List<Card> cards;

        public Deck(string val){
            name = val;
        }
        public List<Card> MakeDeck(){
            cards = new List<Card>();
            IEnumerable<int> SuitRng = Enumerable.Range(0,4);
            IEnumerable<int> ValRng = Enumerable.Range(0, 13);
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