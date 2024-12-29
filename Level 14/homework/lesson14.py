# iteration - განმეორება გაოიყენება კოდის მრავალჯერ გასამეორებლად. მისი მეშვეობით ჩვენი კოდი მარტივდება, ხდება სწრაფი და ამცირებს შეცდომებს კოდში.
# for loop - ციკლი გამოიყენება ერთი და იმავე დავალების, ინსტრუქციის რამდენიმეჯერ შესასრულებლად.

#20-დან 50-მდე დიაპაზონი
for y in range(20,50):
    print(y)

# დიაპაზონი 100-დან 150-მდე 
for u in range(100, 150):
    print(u)

# ლუწი 
for k in range(20, 50, 2):
    print(k)

# კენტი
for a in range(11, 31, 2):
    print(a)

# სახელი და გვარი
for b in range(10):
    print("Nini Pheradze")

# ყველა რიცხვი 10-დან 30-მდე გაყოფილი 2-ზე
for t in range(10, 30):
    print(t / 2)

#  40-დან 60-მდე ყველა რიცხვის მესამე ხარისხი
for x in range(40, 60):
    print(x ** 3)

# მომხმარებლის რიცხვი
num1, num2, num3, num4, num5 = int(input("Enter number1: ")), int(input("Enter number2: ")), int(input("Enter number3: ")), int(input("Enter number4: ")), int(input("Enter number5: "))
for c in range(5):
    print(num1, num2, num3, num4, num5)

#მომხმარებლის სახელი - Nini
user = input("Enter your name: ")
for r in user :
    print(r)



# მომხმარებლის რიცხვები:
num1, num2, num3 =int(input("Enter number1: ")), int(input("Enter number2: ")), int(input("Enter number3: "))
print(num1)
print(num2)
print(num3) 
for y in range(num1, num2, num3):
    print(y ** 2)

# sum ცვლადი
sum = 0
for n in range(5, 16):
    print(n)
    print(sum + 0)
    print(sum + 1)
    print(sum + 2)
    print(sum + 3)
    print(sum + 4)
    print(sum + 5)
    print(sum + 6)
    print(sum + 7)
    print(sum + 8)
    print(sum + 9)
    print(sum + 10)
    print(sum + 11)
    print(sum + 12)
    print(sum + 13)
    print(sum + 14)
    print(sum + 15)

# ციკლების ნაცვლად ხელით წერა დამღლელთან ერთად იქნებოდა მოსაბეზრებელი, არასაინტერესო. კოდის წერისას დავუშვებდით ბევრ შეცდომას, ჩვენი პროგრამა არ იქნებოდა მარტივი და სწრაფი.
