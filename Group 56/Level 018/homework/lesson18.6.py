# Write a program that takes two numbers and an operator (+, -, *, /) as input and performs the calculation. Display the result and end the program.

num1 = int(input("Enter number: "))
num2 = int(input("Enter number: "))
operator = input("Choose one operator: +, -, /, *, **, % ")
if operator == "+":
    print(num1, "+", num2, "=", num1 + num2)
elif operator == "-":
    print(num1, "-", num2, "=", num1-num2)
elif operator == "/":
    if num2 == 0:
        print("0-ზე გაყოფა არ შეიძლება")
    else:
        print(num1, "/", num2, "=", num1/num2)
elif operator == "*":
    print(num1, "*", num2, "=", num1*num2)
elif operator == "**":
    print(num1, "**", num2, "=", num1**num2)
elif operator == "%":
    print(num1, "%", num2, "=", num1%num2)
else:
    print("Wrong operator")