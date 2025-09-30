# Reversed sequence
def reverse_seq(n):
    return [i for i in range(n, 0, -1)]


# If you can't sleep, just count sheep!!
def count_sheep(n):
    return ''.join(f"{i} sheep..." for i in range(1, n + 1))


# Grasshopper - Grade book
def get_grade(s1, s2, s3):
    avg = (s1 + s2 + s3) / 3
    
    # Determine the letter grade based on the average score
    if avg >= 90:
        return 'A'
    elif avg >= 80:
        return 'B'
    elif avg >= 70:
        return 'C'
    elif avg >= 60:
        return 'D'
    else:
        return 'F'


# Is n divisible by x and y?
def is_divisible(n,x,y):
    return n % x == 0 and n % y == 0


# If you can't sleep, just count sheep!!
def count_sheep(n):
    return ''.join(f"{i} sheep..." for i in range(1, n+1))


# # Rock Paper Scissors! ???