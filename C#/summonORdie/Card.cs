namespace summonORdie{
    public class Card{
        public string name {get;set;}
        public string type {get;set;}
        private string[] typeReference = { "Atack", "Atack", "Atack", "Defense", "Utility"};
        public int val {get;set;}
        private int[] valReference = {1, 2, 3, 4, 5};
        public Card(int valIndex, int typeIndex){
            name = typeReference[typeIndex];
            val = valReference[valIndex];
            type = typeReference[typeIndex];
        }
    }
}