# Swapcase

#  Convert a string such that uppercase letters become lowercase and vice versa, then print the result.

string = input("Enter a string: ")
converted_string = string.swapcase()
print("Converted string:", converted_string)

#  Write a function that takes a sentence and returns it with swapped case for each letter.

def swapped_case(taken_sentence):
    sentence = " "

    for letters in taken_sentence:
        if sentence.islower() : print(sentence.swapcase())
        elif sentence.isupper() : print(sentence.swapcase())
        else: print(sentence.swapcase())

swapped_case("Hello, this is Nini!")
print("Hello, this is Nini!".swapcase())