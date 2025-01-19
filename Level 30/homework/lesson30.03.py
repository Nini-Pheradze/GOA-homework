# Capitalize

# Capitalize the first letter of a sentence provided by the user.
user_sentence = "hello, welcome to my world!"
print(user_sentence.capitalize())

# Given a list of lowercase strings, capitalize the first letter of each string.???
lowercase= ["life", "mother", "father", "sisters", "love"]
print(lowercase.capitalize())

# Create a function that takes a string and returns it with the first letter capitalized.

def capitalize_d(first_letter):
    result = " "

    for char in first_letter:
        if result.islower(): result += first_letter.capitalize()

capitalize_d("georgia")
print("georgia".capitalize())