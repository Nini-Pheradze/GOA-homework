# Convert String to Integer
# Ask the user for a number and convert it to an integer. Handle the error if they enter something that can't be converted

user = input("Enter number: ")

try:
    integer = int(user)
    print(f"This number is converted to integer: ", integer)

except:
    print("It's not integer")