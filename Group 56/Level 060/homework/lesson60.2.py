# The Wide-Mouthed frog!
def mouth_size(animal): 
    if animal.lower() == "alligator":
        return "small"
    else:
        return "wide"

# Get Nth Even Number
def nth_even(n):
    return (n - 1) * 2

# 5 without numbers !!
def unusual_five():
    return  len("five!")


# Add Length
def add_length(str_):
    return [f"{word} {len(word)}" for word in str_.split()]
