def lists(main_list, indexes_list):
    for ind in indexes_list:
        main_list.pop(ind)
        indexes_list = 2

    print(main_list)

lists([1, 2, 3, 4, 5], [2, 3])