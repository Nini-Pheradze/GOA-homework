# Prompt the user to enter a number. If the input is not a number, display an error message.
user1 = int(input("Enter your birth year: "))
try:
    num = float(f"Enter {user1}")
    print(num)
except ValueError:
    print("your code has exceptions")


# Create a list and try to access an index that does not exist. Handle IndexError.
list = [5, 10, 15, 20]
try:
    print(list[4])
except IndexError:
    print("Incorrect!")


# Try adding an integer to a string and catch the TypeError.
integer = int(20)
string = ("Here I am!")
try:
    sum = integer + string
    print(sum)
except TypeError:
    print("Wrong!")
