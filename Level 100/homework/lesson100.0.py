# Alphabet war


# Maximum Product

def adjacent_element_product(array):
    max = array[0] * array[1]
    for i in range (1, len(array) - 1):
        product = array[i] * array[i + 1]
        if product > max:
            max = product
    return max


# Filter the number

def filter_string(st):
    digits = ''.join(ch for ch in st if ch.isdigit())
    return int(digits)


# Odd-Even String Sort

def sort_my_string(s):
    even = s[::2] 
    odd = s[1::2]  
    return even + " " + odd



# My Language Skills

def my_languages(results):
    return [lang for lang, score in sorted(results.items(), key=lambda x: x[1], reverse=True) if score >= 60]