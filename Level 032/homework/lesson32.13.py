# Create a function that inserts an item at the end of a list using the insert method.
def inserts_at_the_end(list):
    new = list.insert(index, item)

    for new in list:
        print(new)

list = [1, 2, 3, 4, 5]
item = 5
index = 5
inserts_at_the_end([1, 2, 3, 4, 5])