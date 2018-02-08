using System;

namespace inherit{
    public class Wizard : Humanoid {
        public  Wizard() : base(){
            Health = 50;
            Intelligence = 25;
        }
        public void heal(){
            Health += (10*this.Intelligence);
        }
        public void fireball(Humanoid target){
            Console.WriteLine("A spark forms in your hand.");
            Random random = new Random();
            int itHurts = random.Next(20,51);
            Console.WriteLine("It grows and bursts into flame.");
            target.Health -= itHurts;
            dmgMessage(target,itHurts);
        }
    }
}