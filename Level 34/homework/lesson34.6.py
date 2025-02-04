# Write a function that takes a list of numbers and checks whether each number is even or odd using a loop and conditional statements. Print "Even" for even numbers and "Odd" for odd numbers.

def list_of_numbers(list):
    list = [1, 2, 3, 4, 5, 6, 7, 8]
    for chars in list:
        if chars % 2 == 0 : print(f"{chars} is Even")
        else: print(f"{chars} is Odd")

list_of_numbers([1, 2, 3, 4, 5, 6, 7, 8])

#done