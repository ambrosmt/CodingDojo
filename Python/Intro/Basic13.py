first = []
second = []
#IntAndSum = []
def one():
    for i in range(1,256):
        first.append(i)

def two():
    for i in range(1,256,2):
        second.append(i)

if __name__ == "__main__":
    one()
    print "Print 1-255\v", first
#    print('\v')
    two()
    print "Print odds from 1-255", second