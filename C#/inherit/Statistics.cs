using System;
using System.Reflection;

namespace inherit{
    public partial class Humanoid{
        public void showAllStats(){
            Console.WriteLine("{0}-{5}\n Strength:{1} \n Intelegence:{2} \n Dexterity:{3} \n Health:{4} ",
                    this.Type, this.Strength, this.Intelligence, this.Dexterity, this.Health,this.Name);
        }
        public void showName(){
            Console.WriteLine($"\n Name: {this.Name}");
        }
        public void showType(){
            Console.WriteLine($"\n Type: {this.Type}");
        }
        public void showStrength()
        {
            Console.WriteLine($"\n Strength: {this.Strength}");
        }
        public void showIntelligence()
        {
            Console.WriteLine($"\n Intelligence: {this.Intelligence}");
        }
        public void showDextarity(){
            Console.WriteLine($"\n Health: {this.Health}");
        }
        public void showHealth(){
            Console.WriteLine($"\n Health: {this.Health}");
        }
    }
}