using System;

namespace inherit{
    public class Samuari : Humanoid{
        public Samuari(): base(){
            //if changed edit mediate
            Health = 200;
        }
        public void death_blow(Humanoid target){
            if(target.Health<50){
                Console.WriteLine("Ryū ga waga teki wo kurau!");
                target.Health = 0;
            }
            else{
                Console.WriteLine("Your opponent has more resolve than you believed.");
            }
        }
        public void meditate(){
            Console.WriteLine("...");
            //Max health
            this.Health = 200;
        }
    }
}