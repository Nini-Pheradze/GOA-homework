#შექმენით ფუნქცია, სახელად manual_find, რომელსაც გაწერილი ექნება 2 პარამეტრი: main_string და str_to_find.

#ამ ფუნქციის დავალებაა რომ main_string-ში იპოვოს str_to_find მერამდენე ინდექსზეა.

#თუ მთავარ სთრინგში საძიებელი სთრინგი უბრალოდ არ გვაქვს, დავბეჭდოთ -1

def manual_find(main_str, str_to_find):
    result = -1
    for char in range(len(main_str)):
        if main_str[char] == str_to_find: result = char
    
        elif result == -1: print("String index not found")
    else: print(result)

manual_find("hi hi", "h")