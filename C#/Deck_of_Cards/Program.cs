using System;

namespace Deck_of_Cards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck standard = new Deck("standard");
            Player P1 = new Player("Ready Player One");
            standard.MakeDeck();
            standard.cards.Shuffle();
            P1.Draw(standard);
            P1.Draw(standard);
            P1.Draw(standard);
            P1.Discard(5);
        }
    }
}
