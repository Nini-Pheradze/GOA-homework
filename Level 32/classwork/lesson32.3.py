# შექმენით ფუნქცია სახელად my_split, რომელსაც გადაეცემა ორი პარამეტრი - main_string და string_to_split.ფუნქციამ უნდა დაბეჭდოს სია - main_string გაიხლიჩოს string_to_split-ის მიხედვით.ფუნქციის გამოძახებამდე მომხარებელს შემოატანინეთ მთავარი და დასაყოფი სთრინგები, შეინახეთ ცვლადებში. შემდეგ გამოიძახეთ ფუნქცია და ეს ცვლადები გადაეცით არგუმენტებად.

def my_split(main_string, string_to_split):
    print(main_string.split(string_to_split))
first_string = str(input("Enter main string: "))
second_string = str(input("Enter second string: "))
my_split(first_string, second_string)