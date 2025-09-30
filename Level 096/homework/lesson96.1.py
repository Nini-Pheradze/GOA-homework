# 1. Exclamation marks series 

def replace_exclamation(st):
    return st.replace('a','!')\
    .replace('e','!')\
    .replace('i','!')\
    .replace('o','!')\
    .replace('u','!')\
    .replace('A','!')\
    .replace('E','!')\
    .replace('I','!')\
    .replace('O','!')\
    .replace('U','!')


# 2. Simple multiplication

def simple_multiplication(number) :
    if number % 2 == 0:
        return number*8
    else:
        return number*9


# 3. Cat years, Dog years

def human_years_cat_years_dog_years(h):
    if h == 1:
        return [1, 15, 15]
    elif h == 2:
        return [2, 24, 24]
    else:
        cat_years = 24 + (h - 2) * 4
        dog_years = 24 + (h - 2) * 5
        return [h, cat_years, dog_years]


# 4. Grader

def grader(score):
    if score > 1 or score < 0.6:
        return "F"
    elif score >= 0.9:
        return "A"
    elif score >= 0.8:
        return "B"
    elif score >= 0.7:
        return "C"
    elif score >= 0.6:
        return "D"


# 5. Is the string uppercase?

def is_uppercase(inp):
    return inp == inp.upper()


# 6. Reversed Words

def reverse_words(s):
    return " ".join(s.split(' ')[::-1])


# 7. Calculate average

def find_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)


# 8. Semi-Optional

def wrap(value):
    return {"value":value}


# 9. Who ate the cookie?

def cookie(x):
    if type(x) == str:
        eater = "Zach"
    elif type(x) == int or type(x) == float:
        eater = "Monica"
    else:
        eater = "the dog"
    return "Who ate the last cookie? It was {}!".format(eater)


# 10. Remove First and Last Character Part Two

def array(string):
    if not string:
        return None
    parts = string.split(",")
    if len(parts) <= 2:
        return None
    return " ".join(parts[1:-1])


# 11. Grasshopper - Summation

def summation(num):
    return num * (num + 1) // 2


# 12. Grasshopper - Terminal game move function

def move(position, roll):
    return position + roll * 2


# 13. 5 without numbers !!

def unusual_five():
    vowels = "aeiou"
    return len(vowels) 


# 14. Do you speak "English"?

def sp_eng(sentence): 
    return "english" in sentence.lower()


# 15. Array plus array

def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)


# 16. Merging sorted integer arrays (without duplicates)

def merge_arrays(first, second): 
    return sorted(set(first + second))


# 17. Hex to Decimal

def hex_to_dec(s):
    return int(s, 16)


# 18. Find the first non-consecutive number

def first_non_consecutive(arr):
    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1] + 1:
            return arr[i]
    return None


# 19. Switch it Up!

def switch_it_up(number):
    number = int(number)
    words = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }
    return words.get(number, "Invalid")


# 20. Keep Hydrated!

import math

def litres(time):
    return math.floor(time * 0.5)