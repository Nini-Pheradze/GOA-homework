# else is - elif; elif-ს ეწერება პირობა; თავიდან იწერება if, შემდეგ  შესაძლებელია  ნებისმიერი რაოდენობის elif-ის გაწერა;  საჭიროების შემთხვევაში დაიწერება else. ვიყენებთ იმ შემთხვევაში, როცა გვინდა სხვადასხვა ინფორმაციის ცალ-ცალკე გამოსატანად. 

# Write a program that takes three numbers as input and prints the largest of the three.
num1 = int(input("Enter number: "))
num2 = int(input("Enter number: "))
num3 = int(input("Enter number: "))
if num1 > num2 and num1 > num3:
    print("The biggest number is:", num1)
elif num2 > num1 and num2 > num3:
    print("The biggest number is:", num2)
elif num3 > num1 and num3 > num2:
    print("The biggest number is:", num3)
else:
    print("Two or three numbers are equel")