class Bike(object):
    def __init__(self, name, price, max_speed, miles = 0):
        self.name = name
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def test(self):
        print "you have printed good job"    
    def displayInfo(self):
        print "\n Info for:", self.name
        print "Price = $" , self.price
        print "Max Speed = " , self.max_speed
        print "Total miles moved forward = " , self.miles
        print "\n\n"
    def ride(self,runs = 1):
        print "\n", self.name,  " is on a joy ride ;)"
        for i in range(0, runs):
            self.miles += int(10)
        print "\nYou've gone", self.miles, "miles!"
        return self
    def reverse(self, runs = 1):
        print "\n", self.name, " is reversing ..."
        for i in range(0,runs):
            if self.miles >= 5:
                self.miles -= int(5)
                print "\n You've lost some ground..."
                return self
            else: 
                print "\n... you can't go back more T_T"
                return self 

bike1 = Bike("Yellow Thunda",200,"25mph")
bike2 = Bike("Red Rocket", 500,"150mph")
bike3 = Bike("Tank",10, "1mph")


bike1.ride(3).reverse().displayInfo()
bike2.ride(2).reverse(2).displayInfo()
bike3.reverse(3).displayInfo()
