# Dictionary Key Access
# Use a dictionary and try to access a key that might not exist. Handle the possible error.
dict1 = {
    "Name" : "Nini",
    "Surname" : "Pheradze"}

key_to_access = input("Enter the key you want to access: ")

try:
    value = dict1[key_to_access]
    print(f"The value for '{key_to_access}' is: {value}")

except KeyError:
    print("Incorrect Value!")
