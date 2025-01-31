#  Default Arguments: Define a function that takes a name as input and prints a greeting. If no name is provided, it should use "Guest" as the default. ???

def input_greet(name, name0 = "Guest"):
    name = input("Enter your name: ")
    if name != name0: return name0 
    elif name == name0: return name

input_greet(input("Enter your name: "), name0 = "Guest")