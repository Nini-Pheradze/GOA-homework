# Find the stray number

def stray(arr):
    for num in arr :
        if arr.count(num) == 1 :
            return num


# Sort Numbers

def solution(nums):
    if not nums:
        return []
    return sorted(nums)


# Make a function that does arithmetic!

def arithmetic(a, b, operator):
    if operator == "add":
        return a + b
    elif operator == "subtract":
        return a - b
    elif operator == "multiply":
        return a * b
    elif operator == "divide":
        return a / b


# Breaking chocolate problem

def break_chocolate(n, m):
    if n == 0 or m == 0:
        return 0
    return n * m - 1

# Anagram Detection

def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())