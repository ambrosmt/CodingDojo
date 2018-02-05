using System;
using System.Collections.Generic;

namespace collectionPratice
{
    class Program
    {
        public static object[] arr1(int x)
        {
            if (x <= 10 && x > 0){
                object [] arr1 = new object[1];
                arr1[0] = x;
                Console.WriteLine(arr1[0]);
                return arr1;
            }
            else {
                Console.WriteLine("Please use a valit int (0-9)");
                return new object[0];
            }


        }

        public static string[] names()
        {
            string [] names = new string[4];
            names[0] = "Tim";
            names[1] = "Martin";
            names[2] = "Nikki";
            names[3] = "Sara";
            return names; 
        }

        public static bool[] arr2()
        {
            bool [] arr2 = new bool[10];
            for(int i = 0; i < 10; i++)
            {
                if(i%2 == 0)
                {
                    arr2[i] = false;
                }
                else { arr2[i] = true;}
            }
            return arr2;
            // Boolean[] test = arr2();
            // for (int i = 1; i < test.Length; i++)
            // {
            //     Console.WriteLine(test[i]);
            // }
        }

        public static int[,] MultTable(int size)
        {
            int[,] MultTable = new int[size, size];
            for(int row = 0; row < size; row++)
                {
                    for(int col = 0; col <size; col++)
                    {
                        MultTable[row,col] = ((row+1) * (col+1));
                    }
                }
            return MultTable;
        }

        public static List<string> ice()
        {
            List<string> ice = new List<string>();
            ice.Add("Mint Chocolate Chip");
            ice.Add("Butter Pecan");
            ice.Add("Green Tea");
            ice.Add("Vanilla");
            ice.Add("Chocolate");
            Console.WriteLine(ice.Count);
            Console.WriteLine(ice[2]);
            ice.RemoveAt(2);
            Console.WriteLine(ice.Count);
            return ice;
        }

        public static Dictionary<string,string> info(string[] names)
        {
            Dictionary<string,string> info = new Dictionary<string,string>();           
            foreach (string i in names)
            {
                string pref = Rcream(ice());
                info.Add(i,pref);
            }
            return info;
        }
        public static Random rand = new Random();
        public static string Rcream(List<string> ice)
        {

            string Rcream = ice[rand.Next(0, 4)];
            return Rcream;
        }
        static void Main(string[] args)
        {
            // MultTable(10);
            // ice();
            info(names());
        }
    }
}
