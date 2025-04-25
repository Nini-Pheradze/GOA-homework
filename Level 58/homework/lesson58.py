#  Create a lambda function that adds 5 to a given number.
print((lambda n: n + 5) (10))

# Write a lambda function to multiply two numbers.
print((lambda n, x: n*x) (10, 5))

# Use a lambda function to check if a number is even.
even = lambda y: y % 2 == 0
print(even(10))

# Use a lambda function to convert a list of temperatures from Celsius to Fahrenheit.
temperature = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Fahrenheit = list(map(lambda c: (c * 9/5) + 32, temperature))
print(Fahrenheit)

# Create a lambda function that returns True if a string starts with the letter 'A'.
A = lambda s: s.startswith('A')
print(A("Apple"))
print(A("apple"))

# Use map() to add 10 to every number in a list.
nums = [1, 2, 3]
added = list(map(lambda c : c + 10, nums))
print(added)

# Use map() to convert a list of strings to uppercase.
words = ["apple", "cherry", "peach"]
uppercased = list(map(lambda n: n.upper(), words))
print(uppercased)

# Use map() to find the length of each word in a list of strings.
length = ["movie", "time", "TV"]
finded = list(map(lambda n : len(n), length))
print(finded)

# Use map() to square each number in a list.
number = [2, 3, 4, 5, 6, 7]
square = list(map(lambda x : x**2, number))
print(square)

# Use map() to convert a list of integers to strings.
integers = [2, 4, 6, 8]
converted = list(map(lambda x: str(x), integers))
print(converted)

# Use map() to concatenate the string "Hello " to each name in a list of names.
names = ['Nini', 'Lali', 'Elene']
concatenate = list(map(lambda x : "Hello, " + x, names))
print(concatenate)

# Use map() to subtract 5 from every element in a list.
numbers = [5, 10, 15]
substract = list(map(lambda n : n - 5, numbers))
print(substract)

# Use map() to multiply each number in a list by 3.
number = [3, 4, 5, 6, 7]
multiply = list(map(lambda x : x*3, number))
print(multiply)

# Use map() to convert a list of temperatures in Celsius to Fahrenheit.
celsius = [-1, 11, -8, 34]
fahrenheit = list(map(lambda c: (c * 9/5) + 32, celsius))
print(fahrenheit)

# Use map() to check if numbers in a list are greater than 50.
nums = [3, 67, 88, 44, 32]
greater = list(map(lambda x : x > 50, nums))
print(greater)





# Use filter() to keep only even numbers from a list.
number = [2, 3, 4, 5]
even = list(filter(lambda x : x % 2 == 0, number))
print(even)

# Use filter() to select numbers greater than 10 from a list.
numbers = [8, 9, 10, 12, 14, 15]
greater_10 = list(filter(lambda n : n > 10, numbers))
print(greater_10)

# Use filter() to keep strings longer than 5 characters from a list of strings.
word = ['apple', "pemogranate", 'banana', 'kiwi']
longer = list(filter(lambda n : len(n) > 5, word ))
print(longer)

# Use filter() to remove empty strings from a list of strings.
strings = [' ', 'n', ' ', 'i']
removed = list(filter(lambda n : n != ' ', strings))
print(removed)

# Use filter() to select only positive numbers from a list.
nums = [-1, -4, 6, 7, 8, -3]
selected = list(filter(lambda n : n > 0, nums))
print(selected)

# Use filter() to get numbers divisible by 3 from a list.
number = [3, 5, 6, 8, 9]
dividible = list(filter(lambda n : n % 3 == 0, number))
print(dividible)

# Use filter() to keep words that contain the letter 'e' from a list of words.
words = ["apple", "banana", "cherry"]
words_with_e = list(filter(lambda word: 'e' in word, words))
print(words_with_e)

# Use filter() to remove all None values from a list.
none = [None, 2, 5, 7, 9, None]
remove = list(filter(lambda n : n is not None, none))
print(remove)

# Use filter() to keep numbers that are less than or equal to 50 from a list.
numbers = [1, 2, 56, 81, 90, 50]
less_or_equel = list(filter(lambda x : x >= 50, numbers))
print(less_or_equel)

