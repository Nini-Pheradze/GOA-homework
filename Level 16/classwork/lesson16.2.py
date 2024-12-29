# მეორე დავალება
correct_password = str("phera123")
user_password = input("Enter password: ")
counter = 0
while user_password != correct_password:
    user_password = input("Enter password: ")
    counter += 1
print("ACCESS GRANTED")
print("Your password count:", str(counter))