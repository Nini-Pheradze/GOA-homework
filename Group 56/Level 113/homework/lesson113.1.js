// 3)

// Save and Retrieve User Preferences:
// Create a system that stores a user’s preferred theme (light or dark) in localStorage and automatically applies it when the page loads.
// const p = document.getElementById('p-main');

// const user = prompt("Enter a word: ");

// localStorage.setItem("word", user);

// p.textContent = localStorage.getItem("word");


// 4)

// Visit Counter:
// Implement a counter that tracks how many times a user has visited the page, updating and displaying the count each time they return.

let visitCount = localStorage.getItem('visitCount');

if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = Number(visitCount) + 1;
}

localStorage.setItem('visitCount', visitCount);

document.getElementById("visit-count").textContent =`You have visited this page ${visitCount} times.`;


// 5)

// Form Data Autosave:
// Make a form that automatically saves its input values to localStorage as the user types, and restores them when the page is reopened.

document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("message").value = localStorage.getItem("message") || "";


document.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => {
        localStorage.setItem(field.id, field.value);
    });
});