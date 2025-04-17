# N02
# Print your name
# Task: Write a program that prints your full name.
print("Nini Pheradze")


# N03
# Print a favorite quote
# Task: Print your favorite quote, including quotation marks.
print('"Be the change that you wish to see in the world."')

# N04
# Print multiple lines
# Task: Use the print() function to display a short poem or 3-line message, with each line printed separately.
print("Nini")
print("Pheradze")
print("GOA's student")

# N05
# Print a simple math result
# Task: Print the result of a simple addition, like 2 + 3, using print().
print(2 + 3)

# N06
# Print a shape with symbols
# Task: Use print() to draw a simple shape, like a triangle or square, using * or #.
print("    #")
print("   # #")
print("  # # #")
print(" # # # #")
print("# # # # #")


# N07
# Convert string to integer
# Task: Create a variable with a numeric string (e.g., "42"), convert it to an integer, and print the result.
my_age = "14"
print(int(my_age)) # for printing integer directly

# N08
# Add two floats
# Task: Create two float variables (e.g., 3.5 and 2.5), add them together, and print the result.
float1 = 5.5
float2 = 7.5
print(float1 + float2)

# N09
# Concatenate two strings
# Task: Create two str variables (e.g., "Hello" and "World"), join them with a space in between, and print the result.
str1 = "Good"
str2 = "Luck!"
res = str1 + " " + str2 # for making space between strings
print(res)


# N10
# Print data types
# Task: Create one variable each of type int, str, and float, and use the type() function with print() to show their data types.
variable = "Hello!"
print(type(variable)) # for printing its data type

# N11
# User input and type conversion
# Task: Ask the user for their age using input(), convert it to an integer, add 1, and print their age next year.
user_age = int(input("Enter your age: ")) # for asking user their age and then making it integer
add = user_age + 1 # for printing user's next year age
print(add)


# N12
# Ask for your name
# Task: Write a program that asks the user for their name and prints a greeting, like "Hello, [name]!".
user_name = input("Enter Your Name: ") # asking name
print(f"Hello, {user_name}!") # making greeting

# N13
# Ask for age and calculate next year’s age
# Task: Ask the user for their age and then print how old they will be next year.
user_age = int(input("Enter your age: ")) # for asking user their age and then making it integer
next_year = user_age + 1 # for printing user's next year age
print(next_year)


# N14
# Simple calculator: addition
# Task: Ask the user for two numbers (as input), convert them to integers, and print the sum.
user1 = int(input("Enter Number: ")) # asking number
user2 = int(input("Enter Number: ")) # asking number
print(user1 + user2) # sum of numbers

# N15
# Favorite color
# Task: Ask the user for their favorite color and then print a message like "Your favorite color is [color]!".
user_color = str(input("Enter Your Favourite Colour: ")) # asking color
print(f"Your favourite colour is {user_color}!") 


# N16
# Check if the user is tall enough
# Task: Ask the user for their height (in cm) and check if they are taller than 150 cm. Print an appropriate message based on their height.
user_height = int(input("Enter Your Height in CM: "))
if user_height > 150: # for checking
    print("You are tall enough!")  # if it is
else: 
    print("You need to grow!") # if it is not


# N17
# Print numbers from 1 to 5
# Task: Write a program that uses a for loop to print the numbers from 1 to 5.
for a in range(1, 6):
    print(a)

# N18
# Print each letter of a string
# Task: Create a string (e.g., "Python") and use a for loop to print each letter of the string on a new line.
string = "Javascript"
for i in string: #for each letter
    print(i)

# N19
# Sum of numbers 1 to 10
# Task: Use a for loop to calculate and print the sum of numbers from 1 to 10.
sum = 0
for a in range(1, 11):
    sum += a # for adding

    print("Sum of numbers from 1 to 10 is ", sum)

# N20
# Print a multiplication table (1 to 5)
# Task: Write a for loop to print the multiplication table for the number 2 (i.e., 2x1, 2x2, ..., 2x5).
for a in range(1, 6):
    print(f"2 * {a} = {2 * a}")