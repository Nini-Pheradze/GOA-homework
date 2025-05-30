# Disemvowel Trolls
def disemvowel(string):
    vowels = "aeiouAEIOU"
    res = ""

    for i in string:
        if i not in vowels:
            res += i

    return res


# Square Every Digit
def square_digits(num):
    return int("".join([str(int(d)**2) for d in str(num)]))

def square_digits(num):
    st = []

    for i in str(num):
        int_i = int(i)
        sq_i = int_i**2
        st.append(str(sq_i))

    return int("".join(st))

# Highest and Lowest
def high_and_low(numbers):
    nums = list(map(int, numbers.split(" ")))
    return f"{max(nums)} {min(nums)}"

def high_and_low(numbers):
    nums = numbers.split()
    int_nums = []

    for i in nums: int_nums.append(int(i))

    return f"{max(int_nums)} {min(int_nums)}"

def high_and_low(numbers):
    nums = [int(i) for i in numbers.split(" ")]
    return f"{max(nums)} {min(nums)}"


def filter_list(l):
    return [i for i in l if type(i)!=str]


# Descending Order
def descending_order(num):
    num_str = str(num)
    sorted_digits = sorted(num_str, reverse=True)
    sorted_str = ''.join(sorted_digits)
    return int(sorted_str)