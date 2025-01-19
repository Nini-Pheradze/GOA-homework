# Swapcase

#  Convert a string such that uppercase letters become lowercase and vice versa, then print the result.

def converted(swapped1, swapped2):
    converting = " "
    for char in swapped1:
        if converting == swapped1: converting += swapped1.swapcase()
    for char in swapped2:
        if converting == swapped2: converting += swapped2.swapcase()

converted("Hello, this is Nini!", "hello world!")
print("hello world!".swapcase())
print("Hello, this is Nini!".swapcase())

#  Write a function that takes a sentence and returns it with swapped case for each letter.

def swapped_case(taken_sentence):
    sentence = " "

    for letters in taken_sentence:
        if sentence.islower() : print(sentence.swapcase())
        elif sentence.isupper() : print(sentence.swapcase())
        else: print(sentence.swapcase())

swapped_case("Hello, this is Nini!")
print("Hello, this is Nini!".swapcase())