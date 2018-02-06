using System;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Humanoid Human = new Humanoid("Human");
            Humanoid Orc = new Humanoid("Orc", 5, 2, 0, 200);
            Human.showStats();
            Orc.showStats();
            Human.Attack(Orc);
            Orc.Attack(Human);
            Human.showStats();
            Orc.showStats();
        }
    }
}