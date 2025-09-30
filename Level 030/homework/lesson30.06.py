# Count

# Count the number of times the word "the" appears in a given paragraph.

#paragraph = "the" "the"
#print(paragraph.count("the"))

# Ask the user to input a character and count its occurrences in a given string.

string = input("Enter a string: ")


char = input("Enter a character to count: ")


count = string.count(char)


print(f"The character '{char}' appears {count} times in the string.")


# Create a function that counts and returns the occurrences of a specified word in a text.
def counts_returns(specified_word):
    word = " "
    for occurrences in specified_word:
        if word == specified_word : word += specified_word.count(word)

counts_returns("the Earth")
print("The Earth".count("t"))