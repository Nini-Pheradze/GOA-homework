# Create a while loop that asks the user to enter a password. Keep asking until they enter the correct password "Goa best". Also print the count of incorrect passwords.
user_password = input("Enter password: ")
correct_password = str("GOA best")
counter = 0
while user_password != correct_password:
    print(user_password = input("Enter password: "))
    counter += 1
print("your number count:", str(counter))