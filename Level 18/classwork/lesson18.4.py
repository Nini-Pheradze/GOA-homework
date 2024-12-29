# მეოთხე დავალება
num1, num2 = int(input("enter number: ")), int(input("enter number: "))

if num1 > num2:
    range1 = range(num2, num1 + 1)
    sum1 = 0
# only even numbers
    for n in range1:
        if n%2 == 0:
            print(n)
        sum1 += n
    
    print("Sum of all even numbers are:", str(sum1) )

else:
    range2 = range(num1, num2 + 1)
    sum2 = 0

#only odd numbers
    for n in range2:
        if n%2 != 0:
            print(n)
            sum2 +=1
    
    print("Sum of all even numbers are:", str(sum2))