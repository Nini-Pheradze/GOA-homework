// html-ის სტრუქტურაში დაამატეთ ერთი ღილაკი და მას გაუწერეთ ID.

// js-ში წამოიღეთ ეს ელემენტი და მასზე გაწერეთ მოვლენის მსმენელი. მოვლენა უნდა იყოს დაკლიკება და როდესაც ეს მოვლენა მოხდება, გაუშვით ფუნქცია, რომელიც:

//     1. დაბეჭდავს კონსოლში event ობიექტს.
//     2. ვებსაიტის ფონის ფერს გაწერს შავს.
//     3. ვებსაიტის ტექსტის ფერს გაწერს თეთრს.


let btn = document.getElementById('btn1');

btn.addEventListener('click', function(event) {
    console.log(event);

    document.body.style.backgroundColor = 'black';

    document.body.style.color = 'white';
})

