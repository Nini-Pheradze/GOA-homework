# You're a square!

def is_square(n):
    if n < 0:
        return False

    x = 0
    while x * x <= n:
        if x * x == n:
            return True
        x += 1
    return False


# Get the Middle Character

def get_middle(s):
    length = len(s) 
    middle = length // 2
    
    if length % 2 == 0:
        return s[middle - 1:middle + 1]
    else:
        return s[middle]


# Isograms

def is_isogram(s):
    s = s.lower()
    seen = set()

    for char in s:
        if char in seen:
            return False
        seen.add(char)
    
    return True


# Exes and Ohs

def xo(s):
    s = s.lower()
    return s.count("x")  == s.count("o")


# Jaden Casing Strings

def to_jaden_case(string):
    return ' '.join(word.capitalize() for word in string.split())
