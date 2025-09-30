# შექმენი ცვლადი სადაც შეინახავ ინტეჯერს , შემდეგ გააკეთეთ TypeError, გაუშვით მისი შესაბამისი კოდი, გააკეთეთ try, except ბლოკები

integer = 5000
try: 
    sum = integer + "5000"
    print(sum)
except TypeError :
    print("It's typeerror")

#მომხმარებელს შემოატანინეთ რაღაც მონაცემი (მაგ:სახელი ან გვარი) და try,except ბლოკების საშუალებით გააკონტროლეთ ყველა ერორის შემთხვევა რაც არსებობს
user = str(input("Enter Your Fullname: "))
try:
    changed = int(f"Enter {user}")

except:
    print("Everything is incorrect!")