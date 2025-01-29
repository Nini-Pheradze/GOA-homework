# Write a function that takes a list, an index, and an item, and inserts the item at the specified index.

def list_index_item(list):
    new = list.insert(index, item)

    for new in list:
        print(new)

list = [1, 2, 3, 4, 5]
item = 1
index = 3
list_index_item([1, 2, 3, 4, 5])