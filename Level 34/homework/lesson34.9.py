# Write a function that iterates through a range of numbers (e.g., 1 to 100) and sums up all the numbers divisible by 3. Return the total sum.

def range_of_numbers(start, end):
    res = 0

    for i in range(start, end + 1):
        if i % 3 == 0 : res += i

    return res

print(range_of_numbers(0, 50))

#done