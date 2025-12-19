# Factorial length

import math

def count(n):
    if n == 0 or n == 1:
        return 1

    total = 0
    for i in range(2, n + 1):
        total += math.log10(i)

    return math.floor(total) + 1


# Most digits

