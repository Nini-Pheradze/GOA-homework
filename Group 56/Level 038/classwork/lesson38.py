# შექმენით tuple სადაც შეინახება 10 ელემენტი.დაბეჭდეთ თითოუელი ელემენტი, ინდექსების გამოყენებით
my_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

for index in range(len(my_tuple)):
    print(f"Index {index}: {my_tuple[index]}")

#შექმენით ფუნქცია სახელად no_duplicates, რომელსაც გადაეცემა ერთი პარამეტრი - user_list. user_list-ის მონაცემთა ტიპია სია, ხოლო თქვენი დავალებაა რომ ფუნქციამ დააბრუნოს ეს სია იმ სახით, რომ მასში დუპლიკატები არ გვქონდეს. ფუნქცია გამოიძახეთ 3-ჯერ, განსხვავებული არგუმენტებით
def no_duplicates(user_list):
    return list(set(user_list))

print(no_duplicates([1, 2, 3, 4, 5]))
print(no_duplicates([5, 10, 15, 20]))
print(no_duplicates([100, 200, 300, 400]))