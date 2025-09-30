# შექმენით dictionary, სადაც იქნება შემდეგი გასაღებები: name, surname, academy, fav-color, city, goa-student, age, fav-programming-lang. შემდეგ დაბეჭდეთ ამ dict-ის თითოეული მნიშვნელობა

dict = {
    "name" : "Nini", 
    "surname" : "Pheradze",
    "academy" : "GOA",
    "fav-color" : "white",
    "city" : "Tbilisi",
    "GOA-student" : True,
    "fav-programming-lang" : "Python"
}

# bad way
print(dict["name"])
print(dict["surname"])
print(dict["academy"])
print(dict["fav-color"])
print(dict["city"])
print(dict["GOA-student"])
print(dict["fav-programming-lang"])

#good way
for i in dict:
    print(dict[i])

# Create a Python program that initializes a dictionary with at least five key-value pairs. Perform the following operations:Print all the keys in the dictionary using the keys() method.Print all the values in the dictionary using the values() method.Print all key-value pairs using the items() method.Iterate over the dictionary using the items() method and print each key with its corresponding value in a formatted string.

my_dict = {
    "name": "Nini",
    "age": 14,
    "country": "Georgia",
    "academy": "GOA",
    "hobby": "swimming"
}

print("Keys in the dictionary:", my_dict.keys())

print("Values in the dictionary:", my_dict.values())

print("Key-Value pairs in the dictionary:", my_dict.items())

print("Iterating whole dictionary:")
for key, value in my_dict.items():
    print(f"The key is '{key}' and its value is '{value}'.")