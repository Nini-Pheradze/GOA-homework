from turtle import*
#squares
speed(500)

#first square
penup()
goto(100, 100)
pendown()

for y in range(4):
    forward(250)
    left(90)

#second square
penup()
goto(-350, 100)
pendown()

for y in range(4):
    forward(250)
    left(90)

#third square
penup()
goto(-350, -350)
pendown()

for y in range(4):
    forward(250)
    left(90)

# fourth square
penup()
goto(100, -350)
pendown()

for y in range(4):
    forward(250)
    left(90)

exitonclick()