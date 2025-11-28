from turtle import*

# I want to paint shopping center

shape("turtle")
speed(150)
color("grey")
width(15)


# step 1: paint a square
forward(800)
left(90)
forward(700)
left(90)
forward(800)
left(90)
forward(700)


#step 2: to draw windows all over the building
penup()
goto(60, 0)
pendown()
width(5)
color("black")
left(180)
forward(700)

penup()
goto(120, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(180, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(240, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(300, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(360, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(420, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(480, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(540, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(600, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(660, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(720, 0)
pendown()
width(5)
color("black")
forward(700)

penup()
goto(780, 0)
pendown()
width(5)
color("black")
forward(700)


#step 3: to draw a door
penup()
goto(400,0)
pendown()
width(15)
color("white")
begin_fill()
forward(200)
right(90)
forward(200)
right(90)
forward(200)
end_fill()
color("grey")

penup()
goto(400,0)
pendown()
begin_fill()
color("grey")
left(180)
forward(200)
right(90)
forward(200)
right(90)
forward(200)
end_fill()

#step 4:

penup()
goto(500,200)
pendown()

color("brown")
forward(200)



#step 5:to paint an elevator
penup()
goto(200,0)
pendown()

color("grey")
left(180)
forward(300)


right(90)
forward(600)

penup()
goto(200,300)
color("grey")
left(180)
forward(250)

right(90)
forward(600)

penup()
goto(40,250)
pendown()
color("brown")
begin_fill()
right(90)
forward(110)
right(90)
forward(100)
right(90)
forward(110)
right(90)
forward(100)
end_fill()

exitonclick()