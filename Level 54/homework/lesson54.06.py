# Return a Function – Multiplier
# Create a function that returns another function which multiplies any number by a given factor.
def multiple(factor):
    def multiplier(number):
        return number * factor
    return multiplier

times_three = multiple(8)

print(times_three(2)) 

times_ten = multiple(30)
print(times_ten(3))