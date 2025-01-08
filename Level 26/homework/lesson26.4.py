#  Find Maximum: Create a function that takes a list of numbers and returns the maximum value.
def find_maximum(number):
    max_value = number[0]

    for num in number:
        if num > max_value:
            max_value = num
    list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    print(max_value)

find_maximum([1, 2, 56, 78, 987654, 345, 56])