# Task: Division Calculator with Error Handling

# Ask the user to input two numbers: a numerator and a denominator.

# Attempt to divide the numerator by the denominator inside a try block.

# If the user inputs something that is not a number, catch the error and display a message using except.

# If the user attempts to divide by zero, raise a ValueError with a custom message.

# Regardless of what happens, use a finally block to print a message like “Operation complete."


#Write a function apply_to_list(func, values) that takes a function func and a list values, and returns a new list where func is applied to each element.Then: Define a function square(x) that returns the square of a number.

def square(x):
    return x**2

def apply_to_list(func, values):
    new_list = []

    for i in values:
        new_list.append(func(i))
    
        return new_list

print(apply_to_list(square, list(range(10))))