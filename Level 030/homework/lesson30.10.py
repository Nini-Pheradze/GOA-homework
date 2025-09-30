# Replace

# Replace all occurrences of the word "dog" with "cat" in a given sentence.

word1 = "dog"
word2 = "cat"
words = word1.replace("dog", "cat")
print(words)

# Write a function that replaces all spaces in a string with underscores.

def replace_spaces_by_underscores(replacement):
    string = " "
    space = " "
    underscores = "_"

    for spaces in replacement:
        if string == replacement: space.replace(" ", "_")

replace_spaces_by_underscores("HELLO, WELCOME TO MY WORLD!")
print("HELLO, WELCOME TO MY WORLD!".replace(" ", "_"))