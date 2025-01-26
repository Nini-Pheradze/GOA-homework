# Create a function that takes a string of comma-separated values (CSV) and returns a list of individual items.

#def comma_separated_values(items):
#    items = items.split(",")

#    print(items)

#comma_separated_values("Mercedes, BMW, Audi")

def comma_separated_values(csv_string, items):
    csv_string = "apple,banana,cherry,dates"
    item = csv_string.split(',')