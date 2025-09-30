# შექმენით ფუნქცია სახელად generate_big_sentence, რომელსაც გადაეცემა 3 პარამეტრი - name, surname, age.ფუნქციამ უნდა გამოგვიტანოს წინადადება ზუსტად იგივე წყობით, როგორც მე დავწერე (გადახედეთ რესურებს), გამოიყენეთ format ფუნქცია. სანამ ფუნქციას გამოიძახებთ, მომხმარებელს შემოატანინეთ ტერმინალიდან სახელი, გვარი, ასაკი და შეინახეთ ისინი ცვლადებში.ფუნქციის გამოძახებისას, მას არგუმენტებად უნდა გადაეცეს ეს ცვლადები

def generate_big_sentence(name, surname, age):
    print("My name is {}, My surname is {}, My age is {}".format(name, surname, age))
user_name = input("Enter your name: ")
user_surname = input("Enter your surname: ")
age = int(input("Enter your age: "))

generate_big_sentence(user_name, user_surname, age)