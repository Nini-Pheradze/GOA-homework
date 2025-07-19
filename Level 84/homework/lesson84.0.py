# Sum of a sequence

def sequence_sum(begin_number, end_number, step):
    return sum(range(begin_number,end_number + 1,step))

# Count the Digit

def nb_dig(n, d):
    count = 0
    for x in range(n + 1) :
        square = str (x*x)
        
        count += square.count(str(d))
        
    return count


# Remove anchor from URL

def remove_url_anchor(url):
    return url.split("#")[0]


# Find the capitals

def capitals(word):
    res = []

    for i in range(len(word)):
        char = word[i]

        if char.isupper(): res.append(i)

    return res


# Small enough? - Beginner

def small_enough(array, limit):
    for i in array:
        if i > limit: return False
    return True


# Factorial

def factorial(n):
    if n < 0 or n > 12:
        raise ValueError

    result = 1
    for i in range(2, n+1):
        result *= i

    return result


# Don't give me five!

def dont_give_me_five(start,end):
    res = 0
    for i in range(start,end + 1):
        if "5" not in str(i):
            res+=1
    return res


# Leap Years

def is_leap_year(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False