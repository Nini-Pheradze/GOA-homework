# Create a function that inserts an item at the beginning of a list.

def insert_at_beginning(list, item):
    list.insert(0, item)

my_list = [2, 3, 4]
insert_at_beginning(my_list, 1)
print(my_list) 