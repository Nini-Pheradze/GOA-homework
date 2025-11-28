# Even or Odd: Create a function that determines whether a given integer is even or odd.
def even_odd (Even, Odd):
    y = int(input("Enter Your numbner: "))

    if y % 2 == 0 : print(Even)
    elif y % 2 != 0 : print(Odd)
even_odd("Even", "Odd")