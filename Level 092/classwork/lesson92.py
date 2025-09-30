# Find the middle element
def angle(n):
    return (n-2)*180


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


# Number of Decimal Digits
def digits(n):
    return len(str(n))