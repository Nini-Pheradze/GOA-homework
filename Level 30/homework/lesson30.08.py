# Islower

#  Check if all characters in a given string are lowercase and print the result.

given_string = "hello world!"
if given_string.islower() : print(given_string)
elif given_string.isupper() : print(given_string.lower())

# Create a function that takes a string and returns True if it is completely in lowercase, otherwise False.

def taken_string(lowercase):
    string = " "

    for chars in lowercase:
        if lowercase.islower() : print("True")
        elif lowercase.isupper() : print("False")
        else : print("False")

taken_string("my elevent")
print("True" or "False")

# Prompt the user to input a string and verify if it contains only lowercase letters.
user = input("Enter: ")
if user.islower() : print("True")
elif user.isupper() : print("False")
else: print("False")