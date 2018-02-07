using System;
using System.Linq;
using System.Collections.Generic;

namespace Deck_of_Cards{
    public static class Generate{
        public static List<int> sample(int size){
            List<int> list = new List<int>();
            for(int i = 0; i < size; i++){
                list.Add(i); 
            }
            return list;
        }
    }
}