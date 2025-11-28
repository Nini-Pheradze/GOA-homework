# Get the first element from a list.
#Get the last element from a list using negative indexing.
#Slice the first three elements of a list.
#Extract the last five elements from a string.
#Reverse a string using slicing.
#Get every third element from a list - ყოველი მესამე ელემენტი სიიდან
#Split a list into two halves using slicing. - ორ ნაწილად დაყავით სია (სიის სიგრძე აიღეთ ლუწი)

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(list[0])
print(list[-1])
print(list[0 : 3])

word = "motorcycle"
print(word[5 : 10])
print(word[: : -1])

list = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
print(list[2])
print(list[5])
print(list[8])

list = [10, 20, 30, 40, 50, 60, 70, 80]
print(list[: 4])
print(list[4 :])