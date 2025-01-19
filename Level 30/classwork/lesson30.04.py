#საკლასო დავალება:შექმენით ფუნქცია სახელად manual_swapcase

def manual_swapcase(main_string):
    result = ""

    for char in main_string:
        if char.islower(): 
            result += char.upper()
        else: result += char.lower()

    print(result)

manual_swapcase("HI, Mercedes-Benz,  oohkjmn")
print("HI, Mercedes-Benz,  oohkjmn".swapcase())