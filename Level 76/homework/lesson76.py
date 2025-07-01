# Regex validate PIN code

def validate_pin(pin):
    digits = "0123456789"
    for i in pin:
        if i not in digits:
            return False
    return len(pin)==4 or len(pin)==6

# Is this a triangle?

def is_triangle(a, b, c):
    return a+b>c and b+c>a and c+a>b



def longest(a1, a2):
    res = ""
    for i in a1:
        if i not in res: res += i
    for x in a2:
        if x not in res: res += x
    return "".join(sorted(res))



# Categorize New Member

def open_or_senior(data):
    res = []
    
    for i in data:
        if i[0] >= 55 and i[1] > 7:
            res.append("Senior")
        else:
            res.append("Open")
    
    return res


# Find the next perfect square!

def find_next_square(sq):
    
    # შევამოწმოთ თუ არის perfect square
    if int(sq**0.5)*int(sq**0.5) != sq: return -1

    # დავაბრუნოთ შემდეგი perfect square
    return (int(sq**0.5)+1)**2


# Sum of odd numbers

def row_sum_odd_numbers(n):
    start_num = 1
    res = []

    for i in range(1, n+1):
        ls = []
        for x in range(i):
            ls.append(start_num)
            start_num += 2
        res.append(sum(ls))

    return res[-1]



# Printer Errors

def printer_error(s):
    valid = "abcdefghijklm"
    res = 0
    
    for i in s:
        if i not in valid: res += 1
    
    return f"{res}/{len(s)}"



# Reverse words

def reverse_words(text):
    str_list=text.split(" ")
    result = []
    for i in str_list:
        result.append(i[::-1])
    return " ".join(result)


# Ones and Zeros

def binary_array_to_number(arr):
    res = ""
    for bit in arr:
        res += str(bit)
    return int(res, 2)


# Number of People in the Bus

def number(bus_stops):
    total = 0
    for on, off in bus_stops:
        total += on
        total -= off
    return total


# Odd or Even?

def odd_or_even(arr):
    total = sum(arr)
    return "even" if total % 2 == 0 else "odd"


# min and max
def min_max(lst):
    return [min(lst), max(lst)]