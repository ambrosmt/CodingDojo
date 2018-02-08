using System;

namespace inherit{
    public class Ninja : Humanoid{
        public Ninja(string Name = "Ninja") : base(){
            Type = "Ninja";
            Dexterity = 175;
        }
        public void steal(Humanoid target){
            Console.WriteLine("All your training amounts to this.");
            Health += 10;
            this.PhyAttack(target);
            Console.WriteLine("They never see you comming to strike.");
        }
        public void get_away(){
            //other stuff
            this.Health -= 15;
        }
    }
}
