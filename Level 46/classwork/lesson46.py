def manual_list(start, end, step, user_num):
    return [x + user_num for x in range(start, end, step)]
print(manual_list(1, 10, 2, 5))  
print(manual_list(5, 20, 3, 10)) 
print(manual_list(0, 15, 4, 2))


#Create a list comprehension that generates a list of all numbers between 1 and 100 that are divisible by either 3 or 5, but not both.

list1 = [y for y in range(3, 61) if (y % 3 == 0) != (y % 5 == 0)]

print(list1)


# Create a list comprehension that generates a list of all palindromic numbers between 10 and 200 (a palindromic number reads the same forward and backward).
list2 = [z for z in range(10, 201) if str(z) == str(z)[::-1]]
print(list2)