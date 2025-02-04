# Find the Maximum: Create a function that takes a list of numbers and uses a loop to find and return the maximum number.

def find_max(numbers):
    max_num = numbers[0]

    for num in numbers:
        if num > max_num: max_num = num
    return max_num

print(find_max([3, 5, 7, 2, 8, 1]))

#done