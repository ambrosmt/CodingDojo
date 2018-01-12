print '\n Find and Replace'
words = "It's thanksgiving day. It's my birthday, too!"
print words.index("day")
print words.replace('day', 'month')

print '\n Min and Max'
x = [2,54,-2,7,12,98]
def MinMax(anArray):
    print min(anArray)
    print max(anArray)
MinMax(x)

print '\n First and Last'
y = ["hello", 654,54,215,16,551,"world!"]
def FirLst(anArray):
    print anArray[0]
    print anArray[len(anArray)-1]
FirLst(y)
NewArray = []
NewArray.append(y[0])
NewArray.append(y[len(y)-1])
print NewArray

print '\n New List'
z = [19,2,54,-2,7,98,12,32,10,-3,6]
def Translate(anArray):
    anArray.sort()
    TempArr = anArray[:len(anArray)/2]
#    print TempArr
    anArray = anArray[(len(anArray)/2):]
#    print anArray
    anArray.insert(0,TempArr)
    print(anArray)
Translate(z)