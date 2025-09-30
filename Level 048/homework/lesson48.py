# CODEWARS

# Grasshopper - Personalized Messagedef quarter_of(month):
def greet(name, owner):
    if name == owner:
        return "Hello boss"
    return "Hello guest"


# Transportation on vacation
def rental_car_cost(d):  
    cost = d * 40
    if d >= 7:
        cost  -= 50
    elif d >= 3 and d < 7:
        cost -=20
    return cost


# Quarter of the year
def quarter_of(month):
    if month < 4: return 1
    elif month < 7: return 2
    elif month < 10: return 3
    return 4


#Remove exclamation marks
def remove_exclamation_marks(s):
    return s.replace("!","")


#Total amount of points
def points(games):
    total_points = 0

    for game in games:
        x = game[0]
        y = game[2]

        if x > y: total_points += 3
        elif x == y: total_points += 1

    return total_points


#Volume of a Cuboid
def get_volume_of_cuboid(length, width, height):
    return length*width*height

#Jenny's secret message
def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    return "Hello, {}!".format(name)


#Area or Perimeter
def area_or_perimeter(l , w):
    if l == w:
        return l*w
    return 2 * (l + w)

#Thinkful - Logic Drills: Traffic light
def update_light(current):
    if current == "green": return "yellow"
    elif current == "yellow":  return "red"
    return "green"

#Third Angle of a Triangle
def other_angle(a, b):
    whole_degree = 180
    c = whole_degree - (a+b)
    return c

#L1: Set Alarm
def set_alarm(employed, vacation):
    if employed == True and vacation == False:
        return True
    return False

#Sum Mixed Array
def sum_mix(arr):
    res = 0

    for i in arr:
        res += int(i)

    return res

#Sum without highest and lowest number
def sum_array(arr):
    if arr is None or len(arr) == 1 or len(arr) == 0: return 0

    min_ind = arr.index(min(arr))
    arr.pop(min_ind)

    max_ind = arr.index(max(arr))
    arr.pop(max_ind)

    return sum(arr)


# Grasshopper - Messi goals function
def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague

# Double Char
def double_char(s):
    return ''.join([char * 2 for char in s])

# Parse nice int from char problem
def get_age(age):
    return int(age[0])

# The Feast of Many Beasts
def feast(beast, dish):
    return beast[0].lower() == dish[0].lower() and beast[-1].lower() == dish[-1].lower()

# Array plus array
def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)

# Grasshopper - Check for factor
def check_for_factor(base, factor):
    return base % factor == 0
