#given a list print a message
def ListFilter(arr):
    newStr = ""
    for elements in arr:
    #     #print elements
    #     #print type(elements)
    #     if isinstance(elements, str):
    #         newStr = 'String: '
        if isinstance(elements, str):
            temp = arr.index(elements)
            newStr += arr[temp] + ' '
            if arr.index(elements) is arr[-1]:
                newStr = "String: ", newStr
    print newStr
  #  print "String:", newStr
    if isinstance(elements, int):
        newInt = sum(arr)
        print "Sum:", newInt
            



# input
l = ['magical','unicorns']
N = [2,3,1,7,4,12]
#"The list you entered is of integer type"
#"Sum: 29"

#output
#"The list you entered is of string type"
#"String: magical unicorns"
ListFilter(l)
