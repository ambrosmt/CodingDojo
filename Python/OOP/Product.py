#make a store inv tracker 
class Stock(object):
    def __init__(self, price, name, lbs, brand, status = "For Sale"):
        self.price = price
        self.name = name
        self.lbs = lbs
        self.brand = brand
        self.status = status
    def sell(self):
        self.status = "Sold!!!"
        return self 
    def tax(self, tax):
        print "Price with Tax =", int(self.price + (self.price * tax))
        return self 
    def goBacks(self, reason):
        self.status = reason
        if self.status is "Defective":
            self.price = 0
            return self 
        if self.status is "In Box":
            self.status = "For Sale"
            return self 
        if self.status is "Opened":
            self.stats = "Used"
            self.price = int(self.price - (self.price * 0.2))
            return self 
        else:
            return self
    def displayInfo(self):
        print "\n"
       # print self.name, " Price:{}, Weight:{}, Brand{}, Status{}".format(self.price, self.lbs, self.brand, self.stats)
        print self.name, self.price, self.lbs, self.brand, self.status
        return self 
#Test cases

itm1 = Stock(100,"Gin",10,"Jinteki")
itm2 = Stock(50,"ICE",50,"Has Bioid")
itm3 = Stock(1070,"BigThing",1000,"Wayland Corp")

itm1.displayInfo().tax(0.1).displayInfo()
itm2.displayInfo().sell().displayInfo()
itm3.goBacks("Opened").displayInfo()