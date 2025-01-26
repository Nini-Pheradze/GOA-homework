# Write a function that takes a sentence, a word, and an index, and inserts the word into the sentence at the given index.

def function_that_takes(sentence, word):
    sentence = ["Countries: "]
    word = ["Georgia", "Armenia", "Azerbaijan", "Turkey", "Russia"]
    print()
    print(sentence.insert(word[0:5]))

function_that_takes(["Countries: "], ["Georgia", "Armenia", "Azerbaijan", "Turkey", "Russia"])