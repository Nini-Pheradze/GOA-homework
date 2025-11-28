// html-ის სტრუქტურაში დაამატეთ ლინკი, რომელსაც გაუწერეთ id-ს, სტილს, href-ს. 

// ეს ელემენტი წამოიღეთ js-ში და მასზე დაამატეთ მოვლენის მსმენელი. მოვლენა უნდა იყოს pointerover, ხოლო ფუნქციას გაუწერეთ e პარამეტრი.

// ამ პარამეტრით მიწვდით target და დაბეჭდეთ ელემენტის ყველა ატრიბუტის მნიშვნელობა, ბოლოს დაბეჭდეთ თვითონ target.

let link = document.getElementById('link');

link.addEventListener('pointerover', function(e) {
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.style);
    console.log(e.target.href);
})