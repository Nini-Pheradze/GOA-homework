# Form The Minimum
def min_value(digits):
    unique_digits = sorted(set(digits))
    return int(''.join(map(str, unique_digits)))

# Triangular Treasure
def triangular(n):
     return n * (n + 1) // 2 if n > 0 else 0


# Sum of Minimums!
def sum_of_minimums(numbers):
    return sum(min(row) for row in numbers)

numbers = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
]


# Fizz Buzz
def fizzbuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result