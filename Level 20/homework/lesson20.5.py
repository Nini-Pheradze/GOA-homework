# Write a program that checks if a single given number is prime number
num = int(input("Enter Number: "))
is_valid = True
for y in range(2, num):
    if num % y == 0:
        is_valid = False

if is_valid == True:
    print("number is prime")
else: print("number is not prime")