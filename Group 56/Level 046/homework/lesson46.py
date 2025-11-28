# Create a list comprehension that generates a list of numbers from 1 to 10.
list1 = [x for x in range(1, 11)]
print(list1)

# Generate a list of squares of numbers from 1 to 5 using list comprehension.
list2 = [x**2 for x in range(1, 6)]
print(list2)

# Create a list of all even numbers between 1 and 20 using list comprehension.
list3 = [y for y in range(0, 21, 2)]
print(list3)

# Generate a list of the first letters of each word in a given list of words using list comprehension.
cities = ["Tbilisi", "Toronto", "Paris", "Berlin"]
list4 = [cities[0] for cities in cities]
print(list4)

# Create a list comprehension that converts all words in a given list to uppercase.
cities = ["Tbilisi", "Toronto", "Paris", "Berlin"]
list5 = [cities.upper() for cities in cities]
print(list5)

# Create a list comprehension that generates a list of numbers from 1 to 50 that are divisible by 3.
list6 = [y for y in range(1, 50) if (y % 3 == 0)]
print(list6)

# Create a list comprehension that extracts words with more than 4 letters from a given list of words.
words = ["apple", "banana", "dog", "cat"]
list7 = [n for n in words if len(n) > 4 ]
print(list7)

# Create a list comprehension that converts a list of temperature values in Celsius to Fahrenheit.
celsius = [0, 20, 37, 100]
list8 = [(temp * 9/5) + 32 for temp in celsius]
print(list8)

# Create a list comprehension that finds all prime numbers between 1 and 100.
list9 = [x for x in range(1, 101) if (x % 3 != 0) and (x % 2 != 0) and (x % 5 != 0) and (x % 7 != 0)]
print(list9)

#  Create a list comprehension that extracts all words from a given sentence that contain at least one vowel and are longer than 5 characters.
sentence = "Hi, I'm Nino Pheradze, studying at GOA"
list10 = [n for n in sentence.split() if len(n) > 5 and any(vowel in n.lower() for vowel in "aeiou")]
print(list10)