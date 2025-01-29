# Create a function that takes a string of comma-separated values (CSV) and returns a list of individual items.

def csv_to_list(csv_string):
    # Split the CSV string by commas and store it in a list
    result = csv_string.split(',')
    print(result)  # Output the list directly


csv_string = "apple, banana, cherry, dates"
csv_to_list(csv_string) 

