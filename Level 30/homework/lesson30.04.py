# Find

# Find the position of the first occurrence of the word "Python" in a sentence.

sentence = "Python"
print("Python".find("P"))

# Search for a user-specified substring in a provided string and print its starting index. 
user = "Hello, welcome to my world!"
user_specified = "Hello,"
print(user.find(user_specified))

# That's also may be done in this way:
user = "Hello, welcome to my world!"
print("Hello, welcome to my world!".find("Hello,"))

# Write a function to find and return the index of a specified character in a given string.

def specified_character(given_string):
    result = ''

    for char in given_string:
        if result.isupper(): result += given_string.find(specified_character)
        elif result.islower(): print(given_string.find(specified_character))

specified_character("Anything")
print("Anything".find("t"))