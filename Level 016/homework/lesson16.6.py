user_password = input("enter your password: ")
correct_password = str("1234nini")
counter = 0
while user_password != correct_password:
    user_password = input("enter your password: ")
    counter += 1
print("Access granted")
print("your number count: ", str(counter))