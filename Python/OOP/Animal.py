'''
class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def displayInfo(self):
        print self.name, self.health



if __name__ == "__main__":
    Bugbear = Animal("Bugbear",100)
    Bugbear.displayInfo()
    '''
class Animal(object):
    def __init__(self):
        self.name = self
    def displayInfo(self):
        print self

Bugbear = Animal()

Bugbear.displayInfo