// Show/Hide Image on Button Click
// Add an event listener to a button so that when it’s clicked, it shows or hides an image on the page.გააკეთეთ if else-ით

let button = document.getElementById("toggleBtn");
let image = document.getElementById("Image");

button.addEventListener("click", function() {
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
});

// შექმენით სია და ინტერვალი,ყოველ 1 წამში გამოიტანეთ სიის ყოველი ელემენტი,for loop-ით,ინტერვალის გარეთ კი შეცვალეთ ყველა ელემენტის მნისნელობა სიაში

let list = ["apple", "cherry", "peach"];

let i = 0;
let interval = setInterval(() => {
    if (i < list.length) {
        console.log(list[i]);
        i++;
    } else {
        clearInterval(interval);


for (let y = 0; y < list.length; y++) {
    list[y] = 1;
}

    console.log("New list:", list);
    }
    }, 1000);


