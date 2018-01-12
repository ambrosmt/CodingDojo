#Print all odd # from 1 to 1,000
def CountOdd(start,end):
    Odds = []
    for i in range(start,end+1):
        #when indexed number is even
        if i % 2 != 0:
            Odds.append(i)
        #when indexed number is odd
        else:
            continue
    #return array
    print Odds

#prints Multiples of 5
def MultiplesOf5(start,end):
    Mults = []
    for i in range(start, end+1):
        #Check for Multiple of 5
        if i % 5 == 0:
            Mults.append(i)
        #Skip index when check fails
        else:
            continue
    #return array
    print Mults

def arrSum(arr):
    NumSum = sum(arr)
    print NumSum

def Avg(arr):
    NumAvg = sum(arr) / len(arr)
    print NumAvg

print "\n Odd Numbers from 1-1000 \n"
CountOdd(1,1000)
print "\n Multiples of 5 from 5 - 1,000,000\n"
#this will work for 1,000,000 but changed to 1000 for timeliness
MultiplesOf5(5,1000)
#sum of a list 
print '\n Sum of the values in a list\n'
arrSum([1,2,3,4,5])
#Average of a list 
print '\n Average of the values in a list\n'
Avg([1,2,3,4,5])