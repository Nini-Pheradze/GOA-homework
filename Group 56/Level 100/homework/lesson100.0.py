# Alphabet war

def alphabet_war(fight):
    left = {"w": 4, "p": 3, "b": 2, "s": 1}
    right = {"m": 4, "q": 3, "d": 2, "z": 1}

    score = 0
    for ch in fight:
        if ch in left:
            score += left[ch]
        elif ch in right:
            score -= right[ch]

    if score > 0:
        return "Left side wins!"
    elif score < 0:
        return "Right side wins!"
    else:
        return "Let's fight again!"


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