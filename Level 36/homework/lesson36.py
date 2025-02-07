# Codewars

# 1. Find the smallest integer in the array

def find_smallest_int(arr):
    smallest = arr[0]

    for num in arr:
        if num < smallest:
            smallest = num

    return smallest

# 2. Convert a String to a Number!
def string_to_number(s):
    return int(s)

# 3. Grasshopper - Summation
def summation(num):
    return num * (num + 1) // 2

# 4. Functio 1 - "hello world!"
def greet():
    return "Hello, World!"

# 5. Remove String Spaces
def no_space(x):
    return x.replace(' ', '')

# 6. Returning strings
def greet(name):
    #Good Luck (like you need it)
    return f"Hello, {name} how are you doing today?"

# 7. Convet a Boolean to a String
def boolean_to_string(b):
    #your code here
    return str(b)

# 8. Basic Mathematical operations
def basic_op(operator, value1, value2):
    #your code here
    if operator == '+':
        return value1 + value2
    elif operator == '-':
        return value1 - value2
    elif operator == '*':
        return value1 * value2
    elif operator == '/':
        return value1 / value2

# 9. You Can't Code Under Pressure#1
def double_integer(i):
    # Double the integer and return it!
    return int(i * 2)

# 10. Opposites Attract
def lovefunc( flower1, flower2 ):
    # ...
    return (flower1 % 2 == 0) != (flower2 % 2 == 0)