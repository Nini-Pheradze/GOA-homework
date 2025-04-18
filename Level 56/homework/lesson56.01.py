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


# N21
# Task: Use a for loop to print all even numbers between 2 and 20 (inclusive)
for i in range(2, 21):
    if i % 2 == 0: # for printing only even numbers
        print(i) 

# N22
# Print numbers from 1 to 5
# Task: Write a while loop that prints numbers from 1 to 5.
i = 1
while i < 5: 
    i += 1 # for numbers between 1 to 5
    print(i)

# N23
# Sum of numbers 1 to 5
# Task: Use a while loop to calculate and print the sum of numbers from 1 to 5.
i = 1
total = 0

while i <= 5:
    total += i # for scoring total
    i += 1

print("Sum:", total)

# N24
# Count down from 10 to 1
# Task: Write a while loop that prints the numbers from 10 down to 1.
i = 10
while i >= 1:
    i -= 1 # for counting from 10 to 1
    print(i)


# N25
# Print all odd numbers between 1 and 10
# Task: Use a while loop to print all odd numbers between 1 and 10.
i = 1
while i <= 10:
    if i % 2 != 0: # for finding odd numbers
        print(i)
    i += 1 # for each odd number


# N26
# Ask for user input until they enter "exit"
# Task: Write a while loop that repeatedly asks the user to enter something until they type "exit".
user = " "
while user.lower() != "exit":
    user = input("Enter sth (write 'exit' to quit): ")


# N27
# Print all elements of a list
# Task: Create a list with 3 items and use a loop to print each item in the list.
list = ["apple", "pear", "peach"]
for item in list: #for printing each item
    print(item)

# N28
# Find the length of a list
# Task: Create a list and print the number of elements in the list using the len() function.
fruit = ["pomegranate", "banana", "orange"]
print(len(fruit)) # for length

# N29
# Access a specific element from the list
# Task: Create a list of numbers and print the second element (index 1) of the list.
numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
print(numbers[1]) # for index 1

# N30
# Add an element to the list
# Task: Create a list with 3 elements and add one more element to the end of the list. Print the updated list.
car = ["Mercedes", "BMW", "Audi"]
car.append("Porsche") # for adding new item
print(car)

# N31 
# Remove an element from the list
# Task: Create a list, remove an element using remove(), and print the list after the removal.
colors = ['red', 'blue', 'yellow']
colors.remove('blue') # for removing an element from list
print(colors)

# N32
# Create a list of squares
# Task: Use a list comprehension to create a list of squares for the numbers 1 through 5 (e.g., [1, 4, 9, 16, 25]).
squares = [i ** 2 for i in range(1, 6)] # for squares
print(squares)

# N33
# Create a list of even numbers
# Task: Use a list comprehension to create a list of even numbers from 2 to 10 (inclusive).
even = [i for i in range(2, 11) if i % 2 == 0] # for even numbers
print(even)

# N34
# Filter odd numbers from a list
# Task: Given a list of numbers, use a list comprehension to create a new list containing only the odd numbers.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd = [num for num in numbers if num % 2 != 0] # for finding odd numbers
print(odd)

# N35
# Convert a list of strings to uppercase
# Task: Given a list of strings, use a list comprehension to create a new list where each string is converted to uppercase.
strings = ['apple', 'banana', 'cherry']
uppercase = [string.upper() for string in strings] # for converting them from lower to upper
print(uppercase)

# N36
# Create a list of numbers squared if they are divisible by 2
# Task: Use a list comprehension to create a list that squares each number in a given list only if the number is divisible by 2.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = [i ** 2 for i in numbers if i %  2 == 0] # for only even number squares
print(squares)

# N37
# Function to greet a user
# Task: Write a function that takes a user's name as a parameter and prints a greeting, such as "Hello, [name]!".
def greet(name):
    print(f"Hello, {name}!") # For greeting

greet("Nini")

# N38
# Function to add two numbers
# Task: Write a function that takes two numbers as arguments, adds them together, and returns the sum.
def sum(a, b):
    return a + b

result = sum(2, 3) # for adding only this two numbers
print(result)

# N39
# Function to check if a number is even or odd
# Task: Write a function that takes an integer as input and returns whether it is even or odd.

