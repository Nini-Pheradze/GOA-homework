list = [1, 3.2, 2.3, "a", 3, 8, 12, 29, 3, 30]
user = int(input("Enter number: "))
if  user >= 0 and user >= -10: print(list[user])
elif user >= -10 or user <= -1:print(list[user])
else: print("false")