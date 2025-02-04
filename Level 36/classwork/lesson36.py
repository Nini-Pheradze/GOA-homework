# Codewars

# 1. Multiply
def multiply(a, b):
    return a * b

# 2. Even or Odd
def even_or_odd(number):
    if number %2 == 0:
        return "Even"
    else: return "Odd"

# 3. Convert a Number to a String!
def number_to_string(num):
    return str(num)

# 4. Reversed Strings
def solution(string):
    return string[::-1]

# 5. Return Negative
def make_negative( number ):
    if number > 0:
        return number * -1
    else: return number

# 6. Opposite number
def opposite(number):
    return number * -1

# 7. Convert boolean values to strings 'Yes' or 'No'.
def bool_to_word(boolean):
    if boolean==True:
        return "Yes"
    else:
        return "No"

# 8. Sum of positive
def positive_sum(arr):
    res = 0
    for i in arr:
        if i > 0:
            res += i
    return res

# 9. String repeat
def repeat_str(repeat, string):
    return string * repeat

# 10. Remove First and Last Character
def remove_char(s):
    return s[1:-1]

# 11. Square(n) Sum
def square_sum(numbers):
    result=0
    for i in numbers:
        result +=i**2
    return result