using System;

namespace inherit{
    public partial class Humanoid{
        public void PhyAttack(Humanoid defender){
            int dmg = this.Strength * 5;
            dmgMessage(defender,dmg);
        }
        public void MpAttack(Humanoid defender)
        {
            int dmg = this.Intelligence * 5;
            dmgMessage(defender, dmg);
        }
        public void dmgMessage(Humanoid defender, int dmg){
            Console.WriteLine($"You are attacking {defender.Name}");
            defender.Health = (defender.Health - dmg);
            Console.WriteLine($"{defender.Name} took {dmg} Damage");
        }
    }
}