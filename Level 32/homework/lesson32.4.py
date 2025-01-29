# Write a function that takes a sentence, a word, and an index, and inserts the word into the sentence at the given index.

def function_that_takes(sentence, word, ind):
    new = sentence.split(" ")

    new.insert(ind, word)

    result = " ".join(new)

    print(result)

function_that_takes("You welcome", "are", 1)