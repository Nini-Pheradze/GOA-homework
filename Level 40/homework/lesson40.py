# Codewars


# 'hello world!'

def greet():
    return 'hello world!' 
greet()


# count sheeps

def count_sheeps(sheep):
    return sheep.count(True) #აბრუნებს დათვლილ ცხვრებს


# Remove String Spaces

def no_space(x):
    return x.replace(" ", "") # space-ებს შლის


# You Can't Code Under Pressure 

def double_integer(i):
    return i*2 #ვაორმაგებთ i-ს


# Returning Strings
def greet(name):
    return "Hello, {} how are you doing today?".format(name) # სახელს სვამს და აბრუნებს სრულად


# Convert a Boolean to a String

def boolean_to_string(b):
    return str(b) #აბრუნებს b-ს პირდაპირ სთრინგის სახით


#  Basic Mathematical Operations
def basic_op(operator, value1, value2):
    if operator == "+": # ირჩევს + --ს და აბრუნებს ჯამს
        return value1 + value2
    elif operator == "-": # ირჩევს გამოკლების ოპერატორს და აბრუნებს სხვაობას
        return value1 - value2
    elif operator == "*": # ირჩევს გამრავლების და აბრუნებს ნამრავლს
        return value1* value2
    else:
        return value1 / value2 # ირჩევს გაყოფის -ს და აბრუნებს განაყოფს


# Keep Hydrated!

def litres(time):
    return time // 2 # აბრუნებს განსაზღვრულ დროში მიღებული წყლის რაოდენიბას


# Century From Year

def century(year): 
    if year % 100 == 0: # თუ წელი უნაშთოდ იყოფა 100-ზე
        return year // 100 # მაშინ საუკუნე არის წლების განსაზღვრული რაოდენობა გაყოფილი 100-ზე
    else: # თუ წელი უნაშთოდ არ იყოფა 100-ზე 
        return year // 100 + 1 # მაშინ სრული 100 წლის მისაღებად საუკუნე უნდა გავყოთ 100-ზე და დავუმატოთ 1.


# Convert number to reversed array of digits

def digitize(n):
    starting_str = str(n) # მთელი რიცხვი გარდაქმნილია სთრინგად
    reversed_str = starting_str[::-1] # სთრინგის შესაბრუნებლად

    res_list = [] # ცარიელი სია რიცხვების ჩასაწერად

    for i in reversed_str: # შებრუნებული სთრინგისთვის
        res_list.append(int(i)) # მთელ რიცხვად გადაქცევის შემდეგ მისი დამატება სიაში

    return res_list # შედეგის, შებრუნებული სიის დაბრუნება


# Beginner - Lost Without a Map
def maps(a):
    map=[] 
    for i in a:
        map.append(i*2) # მნიშვნელობების გასაორმაგებლად
    return map


# Opposites Attract

def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 == 1: # თუ პირველი ყვავილი ლუწია და მეორე კენტი  მათ უყვართ ერთმანეთი
        return True
    elif flower1 % 2 == 1 and flower2 % 2 == 0: # პირიქით თუ პირველი კენტია და მეორე ლუწი მათ უყვართ ერთმანეთი
        return True
    else: # თუ ორივე ერთი და იგივე ტიპისაა, მაშინ არ უყვართ.
        return False


# Sum Arrays
def sum_array(a):
    return sum(a) # პირდაპირ აბრუნებს ჯამს

#Beginner Series #1 School Paperwork

def paperwork(n, m):
    # Happy Coding! ^_^
    if n < 0 or m < 0 :
        return 0
    paperwork = n * m 
    return paperwork


# MakeUpperCase

def make_upper_case(s):
    # Code here
    return s.upper()


# Beginner Series #2 Clock
def past(h, m, s):
    total_seconds = (h * 3600) + (m * 60) + s
    
    total_milliseconds = total_seconds * 1000
    
    return total_milliseconds


# Are You Playing Banjo?
def are_you_playing_banjo(name):
    for i in name:
        if i == "r" or i == "R": 
            return name + ' ' + "plays banjo" # იმ შემთხვევაში თუ სახელში არის "r" ან "R"
        else : 
            return name + ' ' + "does not play banjo"
        

# Abbreviate a Two Word Name
def abbrev_name(name):
    name = name.split()

    frist_name = (name[0][0]).upper()
    last_name = (name[1][0]).upper()

    return frist_name + '.' + last_name