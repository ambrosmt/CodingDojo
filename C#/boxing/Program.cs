using System;
using System.Collections.Generic;

namespace boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            boxing();
        }

        static List<object> boxing()
        {
            List<object> cardboard = new List<object> ();
            cardboard.Add(7);
            cardboard.Add(28);
            cardboard.Add(-1);
            cardboard.Add(true);
            cardboard.Add("Chair");
            int sum = 0;
            foreach(object i in cardboard)
            {
                if(i is int)
                {
                    int num = (int)i;
                    sum += num; 
                }
                Console.WriteLine(i);
            }
            Console.WriteLine(sum);
            return cardboard;
        }
    }
}
