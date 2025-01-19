# Isupper

# Verify if all the characters in a user-provided string are uppercase.

user = input("Enter: ")
if user.isupper() : print(user)
elif user.islower() : print(user.upper())
else: print(user.upper())

# Write a function that checks if a string consists entirely of uppercase letters and returns a boolean result.

def boolean_result(uppercase):
    string = " "

    for letters in uppercase :
        if string.isupper() : print(True or False)
        elif string.islower() : print(False)

boolean_result("MY HOME")
print(True or False)

# Check and display whether a string input by the user is in uppercase.

user = input("Enter string: ")
if user.isupper() : print(user)
elif user.islower() : print(user.upper())
else : print(user.upper())