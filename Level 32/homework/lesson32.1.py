#  თქვენი სიტყვებით ახსენით რა განსხვავებაა format ფუნქციასა და f სთრინგს შორის, ასევე რა განსხვავებაა append-სა და insert-ს შორის.

# format() გამოიყენება, ისევე, როგორც f-string, მაგრამ f-string უფრო სწრაფია და კოდის ფორმატირების ერთ-ერთი კარგი მიგდგომაა.

# append()-სა და insert()-ს შორის ის განსხვავებაა, რომ insert ფუნქცია საშუალებას გვაძლევს დავამატოთ კონკრეტული ელემენტი სიის  ინდექსის მითითებით, განსხვავებით append()-ისგან, სადაც ელემენტის დამატება შეგვიძლია მხოლოდ სიის ბოლოს.

# Write a function that takes a user's name and age, and returns a welcome message formatted with an f-string.

def user_name_and_age(name, age):
    print(f"Welcome, my name is {user_name}, my age is {age}")
user_name = input("Enter your name: ")
age = int(input("Enter your age: "))

user_name_and_age(user_name, age)

#done