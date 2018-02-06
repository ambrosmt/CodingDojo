using System;
using System.Collections.Generic;
using System.Linq;

namespace Puzzle
{
    static class testExtensions
    {
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
    public static class RandomInt
        {public static Random rand = new Random();}

    class Program
    {
        public static int[] randArr(int min, int max, int size)
        {
            double maxVal = Int32.MinValue;
            int minVal = Int32.MaxValue;
            int[] randArr = new int[size];
            for(int i = 0; i < size; i++)
            {
                randArr[i] = RandomInt.rand.Next(min,max);
                if(randArr[i] > maxVal)
                {
                    maxVal = randArr[i];
                }
                if (randArr[i] < minVal)
                {
                    minVal = randArr[i];
                }
            }
            int sum = randArr.Sum();

            // Console.WriteLine("The max value is:{0}; The min value is:{1}; and the sum of all the values is:{2}", maxVal,  minVal, sum);
            return randArr;
        }

        public static double coinToss(int flips)
        {
            Console.WriteLine("Tossing a coin {0} time(s)", flips);
            int[] bet_on_it = randArr(0, 2, flips);
            // new int[5] { 0, 0, 0, 0, 0 };
            foreach(int toss in bet_on_it)
            {
                if(toss is 1)
                {
                    // return "Heads!";
                    Console.WriteLine("Heads!");

                }
                else
                {
                    // return "Tails!";
                    Console.WriteLine("Tails!");
                };
            }
            double HeadCount = bet_on_it.Sum();
            double totalflips = System.Convert.ToDouble(flips);
            double Hratio = (HeadCount/totalflips);
            return Hratio;
        }
        
        public static string[] names()
        {
            List<string> names = new List<string>();
            names.Add("Todd");
            names.Add("Tiffany");
            names.Add("Charlie");
            names.Add("Geneva");
            names.Add("Sydney");
            
            string[] Rnames = new string[5]; 
            names.Shuffle();
            Rnames = names.ToArray();

            int count = 0;
            foreach(string name in Rnames){
                if(name.Length > 5){
                    count++;
                }
            }
            string[] longgone = new string[count];

            for(int i = 0; i < Rnames.Length-1; i++)
            {
                if(Rnames[i].Length > 5)
                {
                    longgone[i] = Rnames[i];
                }
            }

            return longgone;

        }

        static void Main(string[] args)
        {
            foreach (string name in names()){
                Console.WriteLine(name);
            }
        }
    }
}