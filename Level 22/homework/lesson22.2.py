#შექმენით სია, რომელშიც იქნება 10 ელემენტი. მომხმარებელს შემოატანინეთ ორი მთელი რიცხვი, num1 და num2. თუ num1 მეტია num2-ზე, slicing მოახდინეთ სიაზე num1 ინდექსიდან num2 ინდექსამდე და დაბეჭდეთ ახალი სია.თუ num2 მეტია num1-ზე, slicing მოახდინეთ სიაზე num2 ინდექსიდან num1 ინდექსამდე და დაბეჭდეთ ახალი სია. თუ ეს ორი რიცხვი ტოლია, დაბეჭდეთ ცარიელი სია.
numbers_list = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
num1 = int(input("Enter number: "))
num2 = int(input("Enter number: "))
if num1 > num2:
    print(numbers_list[num2:num1])
elif num2 > num1:
    print(numbers_list[num1:num2])
elif num1==num2:
    print([])