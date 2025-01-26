# Create a function that inserts an item at the end of a list using the insert method.
def inserts_at_the_end(my_list, item):
    my_list.insert(0, item)

    my_list = [2, 4, 6]
    print(my_list.insert(item))

inserts_at_the_end([2, 4, 6], 8)
print(2, 4, 6)