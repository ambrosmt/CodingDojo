using System;
using System.Linq;
using System.Collections.Generic;

namespace Basic13
{
    class Program
    {
        public static void Print()
        {
            foreach (int i in Enumerable.Range(1,255))
            {
                Console.WriteLine(i);
            }
        }

        public static bool GetOdd(int number)
        {
            if (number % 2 != 0)
                return true;
            else
                return false;
        }
        public static List<object> Odd()
        {
            List<object> OddArr = new List<object>();
            foreach (int i in Enumerable.Range(1, 255).Where(GetOdd))
            {
                Console.WriteLine(i);
                OddArr.Add(i);
            }
            return OddArr;
            // object Y = Odd();
        }

        public static void SumAll()
        {
            int sum = 0;
            foreach (int i in Enumerable.Range(0,255))
            {
                Console.WriteLine("New Number:" + i);
                Console.WriteLine("New Sum:" + sum);
                sum += i; 
            }
        }

        public static void PrintArr(int[] arr)
        {
            foreach(int i in arr)
            {
                Console.WriteLine(i);
            }
        }

        public static int FindMax(int[] arr)
        {
            int max = arr[0];
            foreach(int i in arr)
            {
                if(i>max)
                {
                    max = i;
                }
            }
            return max;
        }

        public static int FindMin(int[] arr)
        {
            int min = arr[0];
            foreach (int i in arr)
            {
                if (i < min)
                {
                    min = i;
                }
            }
            return min;
        }
        public static double FindAvg(int[] arr)
        {
            double sum= arr.Sum();
            double avg = sum / arr.Length;
            return avg;
        }

        public static int GreaterThanY(int[] arr, int Y)
        {
            int count = 0;
            foreach(int i in arr)
            {
                if(i > Y)
                {
                    count++;
                }
            }
            return count;
        }

        public static int[] Square(int[] arr)
        {
            foreach(int i in arr)
            {
                arr[i] = (arr[i] * arr[i]);
            }
            return arr;
        }

        public static int[] RemoveNeg(int[] arr)
        {
            foreach(int i in arr)
            {
                if(i<0)
                {
                    arr[i] = 0; 
                }
            }
            return arr; 
        }

        public static void MinMaxAvg(int[] arr)
        {
            foreach(int i in arr)
            {
                Console.WriteLine(FindMin(arr));
                Console.WriteLine(FindMax(arr));
                Console.WriteLine(FindAvg(arr));
            }
        }

        public static int[] Shift(int[] arr)
        {
            int i = 0;
            int end = arr.Length-1;
            while(i < end)
            {
                arr[i] = arr[i+1];
                i++;
            }
            arr[end] = 0; 
            return arr; 
        }

        public static List<object> NumToStr(int[] arr)
        {
            List<object> newArr = new List<object>();
            foreach (int i in arr)
            {
                if (i < 0)
                {
                    newArr.Add("Dojo");
                }
                else
                {
                    newArr.Add(arr[i]);
                }
            }
            return newArr;
        }

        static void Main(string[] args)
        {
            int [] arr = new [] {
                6,5,4,3,2,1
            };

            Shift(arr);

        }
    }
}