
#ცვლადი გამოიყენება ინფორმაციის მარტივად შესანახად, ცვლადის სახელით ვიგებთ თუ რა ინფორმაცია შევინახეთ ცვლადში, ცვლადის მნიშვნელობა არის ის ინფორმაცია რაც ცვლადში შევინახეთ. შენახული ცვლადის მეშვეობით print() ადვილად ბეჭდავს ეკრანზე.

fullname= "Nini Pheradze"
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)
print(fullname)


name = "Nini"
surname = "Pheradze"
age=14
year=2010
month="06"
print(name)
print(surname)
print(age)
print(year)
print(month)




from turtle import *                                                                                                       

# we want to paint a house

#step1: draw a square
speed(50)
width("20")
color("red")
shape("turtle")


forward(500)
left(90)

forward(500)                            
left(90)

forward(500)
left(90)

forward(500)
left(90) 
#end of square

#drwaing a door
forward (175)
color("yellow")
begin_fill()
left(90)
forward (250) #height 0f the door
right(90)
forward(125)
right(90)
forward(250)
end_fill()

penup()
goto(500,500)
pendown()

color("purple")
begin_fill()
right(150)
forward(500)
left(120)
forward(500)
end_fill()

#draw a window
#draw a square
penup()
goto(420,430)
pendown()
color("pink")
begin_fill()
left(120)
forward(45) #height of the window
left(90)
forward(57)
left(90)
forward(45)
left(90)
forward(57)
end_fill()

#draw a window
#draw a square
penup()
goto(34,430)
pendown()
color("pink")
begin_fill()
left(90)
forward(45) #height of the window
left(90)
forward(57)
left(90)
forward(45)
left(90)
forward(57)
end_fill()

exitonclick()