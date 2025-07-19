# Simple Fun #176: Reverse Letter

def reverse_letter(st):
    return ''.join([c for c in reversed(st) if c.isalpha()])

# Find the middle element

def gimme(input_array):
    return input_array.index(sorted(input_array)[1])


# Sum of angles

def angle(n):
    return (n - 2) * 180


# Round up to the next multiple of 5

def round_to_next5(n):
    return n if n % 5 == 0 else n + (5 - n % 5)


# Two Oldest Ages

def two_oldest_ages(ages):
    sorted_ages = sorted(ages)
    return sorted_ages[-2:]