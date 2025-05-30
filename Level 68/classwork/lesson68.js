// შექმენით ფუნქცია სახელად compare nums, რომელსაც ექნება 2 პარამეტრი - num1 და num2. ფუნქციაში გაწერეთ პირობითი განცხადებები: თუ num1 მეტია num2-ზე, დაბეჭდეთ num1. თუ num2 მეტია num1-ზე, დაბეჭდეთ num2. სხვა შემთხვევაში დაბეჭდეთ "Numbers are equal".

// ფუნქცია გამოიძახეთ მაშინ, როდესაც ვებსაიტზე მომხმარებელი დააკლიკებს ღილაკს

function compareNums(num1, num2) {
    if (num1 > num2) {
        alert(num1);
    } else if (num2 > num1) {
        alert(num2);
    } else {
        alert('Numbers are equal.')
    }
}