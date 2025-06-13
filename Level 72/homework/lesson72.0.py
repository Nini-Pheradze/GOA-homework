# You're a square!

def is_square(n):
    if n < 0: return False

    # if int(n0.5)*int(n0.5)==n: return True
    return False


# Get the Middle Character

def get_middle(s):
    if len(s)%2 == 0:
        return s[len(s)//2-1:len(s)//2+1]
    else:
        return s[len(s)//2]


# Isograms

def is_isogram(string):
    string = string.lower()
    return len(string) == len(set(string))

# Jaden Casing Strings

def to_jaden_case(string):
    string = [i.capitalize() for i in string.split(" ")]
    return " ".join(string)

# Shortest Word

def find_short(s):
    s = s.split(" ")
    res = 1000000

    for i in s:
        if len(i) < res:
            res = len(i)
    return res


# String ends with?

def solution(text, ending):
    return text[len(ending)*-1:] == ending

# Mumbling

def accum(st):
    res = []

    for i in range(len(st)):
        chr = st[i]
        new_str = chr*(i+1)
        res.append(new_str.capitalize())

    return "-".join(res)


# Sum of two lowest positive integers

def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0]+numbers[1]


# Complementary DNA

def DNA_strand(dna):
    res = ""

    for base in dna:
        if base == "A": res+="T"
        elif base == "T": res+="A"
        elif base == "C": res+="G"
        else: res+="C"

    return res

# Beginner Series #3 Sum of Numbers

def get_sum(a,b):
    #good luck!
    if a==b:
        return a

    if a>b:
        a,b=b,a
    res=0
    for i in range(a,b+1):
        res+=i
    return res

def get_sum(a,b):
    return sum(range(min(a, b), max(a,b)+1))


# Friend or Foe?

def friend(x):
    return [i for i in x if len(i)==4]


# Credit Card Mask

def maskify(cc):
    if len(cc) <= 4:
        return cc
    res = ""
    for i in range(len(cc)):
        if i < len(cc) - 4:
            res+="#"
        else: res+=cc[i]
    return res

# Binary Addition

def add_binary(a,b):
    t = a + b
    if t == 0:
        return "0"
    
    binary = ""
    while t > 0:
        binary = str(t % 2) + binary
        t //= 2
    return binary