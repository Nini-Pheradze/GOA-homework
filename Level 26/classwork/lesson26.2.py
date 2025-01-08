def manual_range (start, end, step):
    range1 = range(start, end, step)

    for y in range1:
        if y % 2 == 0 : print(y)

manual_range(20, 100, 2)
manual_range(21, 222, 3)
manual_range(11, 22, 2)
manual_range(45, 90, 3)
manual_range(34, 64, 2)
manual_range(120, 220, 5)
manual_range(345, 745, 5)
manual_range(350, 500, 50)