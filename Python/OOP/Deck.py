#we are makeing a deck of cards

class Cards(object):
    def __init__(self,value, Suit, name):
        self.value = value
        self.suit = suit
        self.name = name
    class Suit(Cards):
        def __init__(self, type):
            self.type = "Hearts" || "Diamonds" || "Clubs" || "Spades"



class Deck(object):
    def __init__(self, Cards, size)
        self.Cards = Cards
        self.size = size

if __name__=="__main__": 
    test = {}