using System;

namespace inherit{
    public partial class Humanoid {
        public string Type;
        // static void TypeDel(string Type);
        public string Name;
        public int Strength {get; set;}
        public int Intelligence { get; set; }
        public int Dexterity { get; set; }
        public int Health { get; set; }
        public Humanoid(string optional = "NPC"){
            Name = optional;
            Type = "Base Humanoid";
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            Health = 3;
        }
        public Humanoid(string Ctype, int Cstr, int Cint, int Cdex, int Chealth)
        {
            Type = Ctype;
            Strength = Cstr;
            Intelligence = Cint;
            Dexterity = Cdex;
            Health = Chealth;
        }
    }
}