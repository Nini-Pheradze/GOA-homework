# Write a function that takes a list of numbers and checks whether each number is even or odd using a loop and conditional statements. Print "Even" for even numbers and "Odd" for odd numbers.

def list_of_numbers(Even, Odd):
    list = [1, 2, 3, 4, 5, 6, 7, 8]

    for chars in list:
        if list[::-1] % 2 == 0 : print(Odd)
        elif list[::-1] % 2 != 0 : print(Even)

        return Even, Odd

list_of_numbers("Even", "Odd")