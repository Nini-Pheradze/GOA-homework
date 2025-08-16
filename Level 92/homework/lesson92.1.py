# The Coupon Code

import datetime
def check_coupon(entered_code, correct_code, current_date, expiration_date):
    if entered_code is correct_code:
        return(datetime.datetime.strptime(current_date,'%B %d, %Y') <= datetime.datetime.strptime(expiration_date,'%B %d, %Y'))
    return False


# Are the numbers in order?

def in_asc_order(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            return False
    return True


# Flatten and sort an array

def flatten_and_sort(array):
    flat = [num for sublist in array for num in sublist]
    return sorted(flat)


# Factorial

def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


# Maximum Length Difference

def mxdiflg(a1, a2):
    if not a1 or not a2:  
        return -1
    
    len1 = [len(s) for s in a1]
    len2 = [len(s) for s in a2]
    
    return max(abs(max(len1) - min(len2)), abs(max(len2) - min(len1)))