# Ask the user to enter a number multiple times and check if it's even or odd. Stop after 5 numbers.
for i in range(5):
    user = int(input("Enter number: "))
    if i % 2 == 0:
            print(str(i), " - even")
    else:
        print(str(i), " - odd")