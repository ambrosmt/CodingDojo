using System;

namespace Human{
    public class Humanoid{
        
        public string Type;
        public int Strength = 3;
        public int Intelligence = 3;
        public int Dexterity = 3;
        public int Health = 100;
        public Humanoid(string str)
        {
            Type = str;
        }
        public Humanoid(string Ctype, int Cstr, int Cint, int Cdex, int Chealth){
            Type = Ctype;
            Strength = Cstr;
            Intelligence = Cint;
            Dexterity = Cdex;
            Health = Chealth;    
        }

        public void showStats(){
            Console.WriteLine("{0}\n Strength:{1} \n Intelegence:{2} \n Dexterity:{3} \n Health:{4} ",
                    this.Type, this.Strength, this.Intelligence, this.Dexterity, this.Health);
        }

        public void Attack(Humanoid defender){
            int dmg = this.Strength * 5;
            Console.WriteLine("You are attacking {0}", defender);
            defender.Health = (defender.Health - dmg);
            Console.WriteLine("{0} took {1} Damage", defender, dmg);
        }
    }
}