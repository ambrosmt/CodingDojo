using System;

namespace inherit
{
    class Program
    {
        static void Main(string[] args)
        {
            Humanoid bob = new Humanoid("bob");
            Wizard jim = new Wizard("Harry");
            Samuari jack = new Samuari();
            bob.showAllStats();
            jim.showName();
            jack.showName();
        }
    }
}
