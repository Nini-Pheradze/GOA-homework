from turtle import *                                                                                                       

# we want to paint a house

#step1: draw a square
speed(50)
width("7")
color("red")
shape("turtle")


forward(200)
left(90)

forward(200)                            
left(90)

forward(200)
left(90)

forward(200)
left(90) 
#end of square

#drwaing a door
forward (70)
color("yellow")
begin_fill()
left(90)
forward (120) #height 0f the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,200)
pendown()

color("purple")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#draw a window
#draw a square
penup()
goto(137,130)
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
goto(14,130)
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