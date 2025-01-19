# Lower

# Convert all the characters of a given sentence to lowercase and print it.

def sent_ence(chara_cters):
    sentence = ""

    for characters in chara_cters:
        if sentence.isupper():
            sentence += characters.upper()

sent_ence("MY HOME")
print("MY HOME".lower())

# Ask the user for their email address and ensure it is stored in lowercase.

user_email = input("Enter your email: ")
if user_email.islower(): print("correct")
elif user_email.isupper(): print(input("Enter your email again: "))
else: print("Your email is incorrect")

# Write a function that takes a mixed-case string and returns it in all lowercase letters.

def mixed_case(mixed_str):
    string = " "

    for char in mixed_str:
        if string.capitalize():
            string += char.lower()

mixed_case("DFGRGxbwnjsk,zwjehbgr")
print("DFGRGxbwnjsk,zwjehbgr".lower())