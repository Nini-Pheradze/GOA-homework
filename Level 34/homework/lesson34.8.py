# Define a function that takes a list of integers and returns a new list containing only the positive numbers. Use a loop and a conditional statement.

def list_of_integers(int_list):
    res_list = []

    for num in int_list:
        if num > 0 : res_list.append(num)

    return res_list

print(list_of_integers([1, 2, -5, 3, 4, 5, 6, 7, -1, -11, -74]))

#done
