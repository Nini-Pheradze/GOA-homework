# Factorial: Implement a function to calculate the factorial of a given number.

def factorial(num):
    result = 1

    for i in range(2, num + 1): result *= i

    print(result)

factorial(7)