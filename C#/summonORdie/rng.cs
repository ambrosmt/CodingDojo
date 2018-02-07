using System.Collections.Generic;
using System.Linq;
using System;

namespace summonORdie
{
    static class rng{
        public static class RandomInt{ 
            public static Random rand = new Random(); }

        public static void Shuffle<T>(this IList<T> list)
        {
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = RandomInt.rand.Next(n + 1);
                T value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }
    }
}