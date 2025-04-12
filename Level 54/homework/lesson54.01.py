# User Input Number Division
# Ask the user to enter two numbers and divide them. Handle errors like division by zero and non-numeric input.
try:
    numerator = int(input("Enter the numerator: "))
    denominator = int(input("Enter the denominator: "))
    result = numerator / denominator
    print(f"The result of {numerator} ÷ {denominator} is {result}")

except ValueError:
    print("Invalid input. Please enter numeric values.")

except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")

