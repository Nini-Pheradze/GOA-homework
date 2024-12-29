username1 = input("enter username: ")
username = str("Nini")
counter = 0
password1 = input("enter password: ")
password = str("nini12345678")
counter = 0
while (username1 != username) or (password1 != password):
    username1 = input("enter username: ")
    password1 = input("enter password: ")
    counter += 1

print("Access granted")
print("your number count:", str(counter) )