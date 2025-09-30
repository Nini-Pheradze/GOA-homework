# Function as Argument – Greeting
# Write a function that takes another function as an argument and calls it to print a greeting.

def greeting():
    print("Hello")

def greet(hello_world):
    print("Hello World!")
    hello_world()

greet(greeting)