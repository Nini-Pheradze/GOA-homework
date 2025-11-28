# Power of two

def power_of_two(x):
    numbers = [1, 2]
    while numbers[-1] < x:
        numbers.append(numbers[-1]*2)
    return x in numbers


# Row Weights

def row_weights(array):
    # team1 = even
    # team2 = odd
    team1 = []
    team2 = []
    for index,item in enumerate(array):
        if index % 2 == 0:
            team1.append(item)
        else: team2.append(item)
    return (sum(team1),sum(team2))


# Predict your age!

def predict_age(age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8):
    ages = [age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8]
    return int((sum([i * i for i in ages])**0.5)/2)



# Greet Me

def greet(name): 
    r_name = name.capitalize()
    return f"Hello {r_name}!"


# Sum of Cubes

def show_sequence(n):
    if n < 0: return f"{n}<0"
    elif n == 0: return "0=0"

    all_numbers = [i for i in range(0, n+1)]
    return f"{'+'.join([str(i) for i in all_numbers])} = {sum(all_numbers)}"


# Even numbers in an array

def even_numbers(arr,n):
    arr = [i for i in arr[::-1] if i%2==0]
    return arr[:n][::-1]


# Sort the Gift Code

def sort_gift_code(code):
    return ''.join(sorted(code))



# Remove duplicate words

def remove_duplicate_words(s):
    seen = set()
    result = []

    for word in s.split():
        if word not in seen:
            seen.add(word)
            result.append(word)

    return " ".join(result)



# Love vs friendship

def words_to_marks(s):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    sum = 0
    for i in s:
        sum += alphabet.index(i) + 1 
    return sum



# Simple beads count

def count_red_beads(n):
    if n > 2:
        return (n-1)*2
    return 0



# Bumps in the Road

def bumps(road):
    bump_count = road.count("n")
    if bump_count <= 15: return "Woohoo!"
    return "Car Dead"



# Find the vowels

def vowel_indices(word):
    vowels = 'aeiouy'
    indices = []
    for i, c in enumerate(word.lower()):
        if c in vowels:
            indices.append(i + 1)
    return indices


# Largest pair sum in array

def largest_pair_sum(numbers): 
    numbers = sorted(numbers)
    return numbers[-1] + numbers[-2]