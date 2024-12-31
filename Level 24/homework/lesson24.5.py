from turtle import*
# squares
speed(500)

# first square
def four_squares(x_coordinate, y_coordinate):
    penup()
    goto(x_coordinate, y_coordinate)
    pendown()

    for i in range(4):
        forward(250)
        left(90)

four_squares(100, 100)
four_squares(-350, 100)
four_squares(-350, -350)
four_squares(100, -350)

exitonclick()