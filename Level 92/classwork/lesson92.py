# Simple Fun #176: Reverse Letter

def reverse_letter(st):
    filtered_st = ""

    for i in st:
        if i.isalpha():
            filtered_st += i

    return filtered_st[::-1]

# Sum of angles

def gimme(input_array):
    # input_array = [10, 5, 2]

    sorted_arr = sorted(input_array)
    # sorted_arr = [2, 5, 10]

    mid_l = sorted_arr[1]
    # mid_l = 5

    return input_array.index(mid_l)
    # [10, 5, 2].index(5) = 1

# Find the middle element
def angle(n):
    return (n-2)*180


def round_to_next5(n):
    if n%5 == 0: return n

    return (n//5 + 1) * 5

# Round up to the next multiple of 5

def two_oldest_ages(ages):
    ages = sorted(ages)

    return [ages[-2], ages[-1]]

def two_oldest_ages(ages):
    return sorted(ages)[-2:]


# Alternate capitalization

def capitalize(s):
    even = [s[i].upper() if i % 2 == 0 else s[i] for i in range(len(s))  ]
    odd = [s[i].upper() if i % 2 != 0 else s[i] for i in range(len(s))  ]
    return ["".join(even),"".join(odd)]


# No oddities here

def no_odds(values):
    return [x for x in values if x%2 == 0]

def no_odds(values):
    res = []

    for i in values:
        if i%2 == 0:
            res.append(i)

    return res



# Check the exam

def check_exam(arr1,arr2):
    score = 0
    for i in range(len(arr1)):
        if arr2[i] == "":
            score += 0
        elif arr2[i] == arr1[i]:
            score += 4
        else: score-= 1
    if score < 0:
        return 0
    return score