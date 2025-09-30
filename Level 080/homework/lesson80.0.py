# Sum of the first nth term of Series
def series_sum(n):
    if n==0:
        return "0.00"
    if n==1:
        return "1.00"

    res = 1
    divisor = 4
    for i in range(n-1):
        res += 1/divisor
        divisor += 3

    final = str(round(res, 2))
    if len(final.split(".")[1])==1:
        return final + "0"
    return final



# Find the divisors!
def divisors(integer):
    divisors = []

    for i in range(2, integer):
        if integer%i==0:
            divisors.append(i)

    if len(divisors) == 0:
        return f"{integer} is prime"
    return divisors

# Remove the minimum
def remove_smallest(numbers):
    if numbers == []:
        return []
    lst = numbers
    minimal = lst.index(min(numbers))
    return lst[:minimal] + lst[minimal+1:]


# Testing 1-2-3

# first way
def number(lines):
    return [f"{i + 1}: {line}" for i, line in enumerate(lines)]

# second way

def number(lines):
    result = []
    index = 1
    for line in lines:
        result.append(f"{index}: {line}")
        index += 1
    return result

# Count the divisors of a number
def divisors(n):
    count = 0
    i = 1
    while i * i <= n:
        if n % i == 0:
            if i * i == n:
                count += 1 
            else:
                count += 2 
        i += 1
    return count