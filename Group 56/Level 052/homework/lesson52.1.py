# CODEWARS
# for homework

# Find the first non-consecutive number


# altERnaTIng cAsE <=> ALTerNAtiNG CaSe
def to_alternating_case(string):
    return ''.join([char.lower() if char.isupper() else char.upper() for char in string])


# Correct the mistakes of the character recognition software




#Is it a palindrome?
def is_palindrome(s):
    cleaned_string = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned_string == cleaned_string[::-1]



# Do I get a bonus?
def bonus_time(salary, bonus):
    total_salary = salary * 10 if bonus else salary
    return f"${total_salary}"

#Student's Final Grade
def final_grade(exam, projects):
    if exam > 90 or projects > 10:
        return 100
    elif exam > 75 and projects >= 5:
        return 90
    elif exam > 50 and projects >= 2:
        return 75
    else:
        return 0


# Sum The Strings
def sum_str(a, b):
    return str(int(a or "0") + int(b or "0"))