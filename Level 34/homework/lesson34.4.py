#  Default Arguments: Define a function that takes a name as input and prints a greeting. If no name is provided, it should use "Guest" as the default.

def input_greet(name, greet, name0 = "Guest"):
    name = input("Enter your name: ")
    greet = "this is", name
    if name != name0: return name0 
    elif name == name0: return greet

input_greet(input("Enter your name: "), "this is",("Enter your name: "),  name0 = "Guest")