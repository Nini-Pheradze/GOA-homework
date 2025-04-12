# List Index Access
# Create a small list and ask the user for an index to access. Handle the case when the index is out of range.
try:
    list1 = ["Mercedes", "BMW", "Audi"]
    print(list1[4])

except IndexError:
    print("Invalid index!")
