# input
word_list = ['hello','world','my','name','is','Anna']
char = 'o'
# output
#new_list = ['hello','world']
def FindMe(Words, Chr):
    new_list = ''
    for elememts in Words:
        if Words[Words.index(elememts)].find(Chr) > 0:
            new_list += Words[Words.index(elememts)] + " "
    print new_list
FindMe(word_list,char)