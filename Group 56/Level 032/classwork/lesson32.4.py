# შექმენით ფუნქცია სახელად manual_append. ამ ფუნქციამ სიის ბოლოში უნდა ჩაამატოს ახალი ელემენტი. არ გამოიყენოთ append, გამოიყენეთ insert. ფუნქციას ექნება 2 პარამეტრი - main_list, item_to_insert.

def manual_append(main_list, item_to_insert):
    length = len(main_list)
    print(main_list)
    main_list.insert(length, item_to_insert)
    print(main_list)

manual_append([23, 27], [234, 23])