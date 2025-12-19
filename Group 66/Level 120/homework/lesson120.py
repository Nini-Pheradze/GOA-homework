# Sorting by bits

def sort_by_bit(arr): 
    arr.sort(key=lambda x: (x.bit_count(), x))
    return arr


# The Hashtag Generator

def generate_hashtag(s):
    if not s or not s.strip():
        return False

    hashtag = "#" + "".join(word.capitalize() for word in s.split())

    if len(hashtag) > 140:
        return False

    return hashtag




# Zeros and Ones

def replace_zero(arr):
    best_index = -1
    best_len = 0
    n = len(arr)

    for i in range(n):
        if arr[i] == 0:
            left = 0
            right = 0

            j = i - 1
            while j >= 0 and arr[j] == 1:
                left += 1
                j -= 1

            j = i + 1
            while j < n and arr[j] == 1:
                right += 1
                j += 1

            length = left + right + 1

            if length >= best_len:   # >= → return LAST index
                best_len = length
                best_index = i

    return best_index
