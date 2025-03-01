# თქვენი სიტყვებით ახსენით dictionary რითი განსხვავდება აქამდე ნასწავლი კოლექციებისგან, რა არის key, value, key-value pair
# dictionary გამოიყენება მონაცემთა მნიშვნელობების შესანახად. ლექსიკონი არის კოლექცია, რომელიც არის დალაგებული, შესაძლებელია მისი შეცვლა და არ აქვს დუპლიკატები. dictionary იწერება კლაკნილი ფრჩხილებით და აქვს key და value. key ინახავს ლექსიკონის მნიშვნელობებს, value არის ის მნიშვნელობა რასაც key ინახავს. dictionary-ის მონაცემები ინახება key-value pair-ებში.

# Create a dictionary with at least five key-value pairs and print all the keys using the keys() method.

dict = {
    "country" : "Georgia",
    "Capital" : "Tbilisi",
    "Population" : "3,807,008 ",
    "Neighbouring state" : "Armenia, Turkey, Azerbaijan, Russia",
    "Sea" : "Black sea"
}

key = dict.keys()
print(key)

# Create a dictionary and print all the values using the values() method.

value = dict.values()
print(value)

# Create a dictionary and print all key-value pairs using the items() method.

item = dict.items()
print(item)

# Iterate over a dictionary using the items() method and print each key with its corresponding value.
for items in dict:
    print(dict.items())

#  Create a dictionary and check if a specific key exists using the in operator.

for key, value in dict.items():
    print(f"Key is {key} and value is {value}")

# Retrieve a value from a dictionary using the get() method and handle cases where the key does not exist.

my_dict = {
    "name" : "Nini",
    "age" : 14
}

key = 23

value = print(my_dict.get(key, "key doesn't exist"))

# Add a new key-value pair to an existing dictionary and print the updated dictionary.

my_dict["country"] = "Georgia"
print(my_dict)

# Remove a key-value pair from a dictionary using the pop() method and print the updated dictionary.

removed = my_dict.pop("name")
print(my_dict)

#  Update an existing dictionary with another dictionary using the update() method.

dictionary1 = {
    "fruit" : "Apple, grape, watermelon, orange"
}

dictionary2 = {
    "vegetables" : "Cabbage, carrot, cucumber, tomato"
}

dictionary1.update(dictionary2)
print(dictionary1)

my_dict.update(dict)
print(my_dict)

# Create a dictionary and print its length using the len() function.

print(len(my_dict))

#  Write a function that returns the sum of all numeric values in a dictionary.

def sum_of_numbers(numbers):
    num = 0
    for value in numbers.values(): 
        if isinstance(value, int) or isinstance(value, float):
            num += value
    return num

numbers = {
    "num1" : 10,
    "num2" : 11,
    "num3" : 12,
    "num4" : 13,
    "num5" : 14
}

result = sum_of_numbers(numbers)
print(result)

# Clear all elements from a dictionary using the clear() method and print the result.
dict.clear()
print(dict)

# Create dictionary about your information, use at least 10 key-value pairs

my_information = {
    "name" : "Nini",
    "surname" : "Pheradze",
    "age"  : 14,
    "occupation" : "Student",
    "country" : "Georgia",
    "hobby" : "swimming",
    "fav programming language" : "Python",
    "academy" : "GOA",
    "fav car brand" : "Mercedes-Benz",
    "birth year" : 2010,
    "birth month" : 6,
    "birth number" : 8
}
