# წინა ფუნქციაში format ფუნქციის მაგივრად გამოიყენეთ f string.

def generate_big_sentence(name, surname, age):
    print(f"My name is {user_name}, My surname is {user_surname}, My age is {age}")
user_name = input("Enter your name: ")
user_surname = input("Enter your surname: ")
age = int(input("Enter your age: "))

generate_big_sentence(user_name, user_surname, age)