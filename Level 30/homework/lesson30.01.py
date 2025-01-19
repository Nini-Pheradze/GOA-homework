# Uppercase

# Convert a given sentence to uppercase and print the result.

sentence = "My name is Nini"
print(sentence.upper())

# Take a user's name input and display it in uppercase letters.

user = str(input("Enter your name: "))
print(user.upper())

#  Create a function that converts a list of lowercase strings to uppercase.

def list_str(upper_case):
    result = ""

    for char in upper_case:
        if char.islower(): 
            result += char.upper()

list_str("ana")
print("ana".upper())