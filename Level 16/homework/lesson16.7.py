n = int(input("Enter natural number: "))
factorial, first_number = 1, 1

while first_number <= n:
    print("first_number:", str(first_number))
    factorial *= first_number
    print("Factorial:", str(factorial))
    first_number += 1

print("Factorial :", str(n), "is:", str(factorial))