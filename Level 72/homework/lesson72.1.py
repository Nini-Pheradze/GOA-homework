# Regex validate PIN code

def validate_pin(pin):
    if len(pin) != 4 and len(pin) != 6:
        return False
    for char in pin:
        if char < '0' or char > '9':
            return False
    return True


# Is this a triangle?

def is_triangle(a, b, c):
    if a <= 0 or b <= 0 or c <= 0:
        return False
    return a + b > c and a + c > b and b + c > a   


# Two to One

def longest(a1, a2):
    sum = a1 + a2
    unique = set(sum)
    return ''.join(sorted(unique))


# Categorize New Member

def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result



# Find the next perfect square!

def find_next_square(sq):
    if (sq ** 0.5).is_integer():
        next_root = int(sq ** 0.5) + 1
        return next_root ** 2
    else:
        return -1
