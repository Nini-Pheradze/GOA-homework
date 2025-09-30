# Create a function that inserts an item at the beginning of a list.

def insert_at_beginning(list):
    new = list.insert(index, item)

    for new in list:
        print(new)

list = [1, 2, 3, 4, 5]
item = 3
index = 0
insert_at_beginning([1, 2, 3, 4, 5])