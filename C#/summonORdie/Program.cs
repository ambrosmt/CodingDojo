using System;

namespace summonORdie
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck standard = new Deck();
            Player readyPlayerOne = new Player(standard);
            Deck p2d = new Deck();
            Player p2 = new Player(p2d);
            standard.MakeDeck();
            p2d.MakeDeck();
            standard.cards.Shuffle();
            p2d.cards.Shuffle();
            p2.Draw(p2d);
            p2.Draw(p2d);
            readyPlayerOne.Draw(standard);
            readyPlayerOne.Draw(standard);
            Console.WriteLine(readyPlayerOne);
            Console.WriteLine(p2);
        }
    }
}
