// prompt-ით მომხმარებელს შემოატანინეთ ნებისმიერი სიტყვა და ეს სიტყვა შეინახეთ localStorage-ში.

// შემდეგ, localStorage-დან წამოიღეთ ეს სიტყვა და ის textContent-ად გაუწერეთ პარაგრაფს. 

// როდესაც ვებსაიტი დარეფრეშდება და localStorage-ში ინფორმაცია უკვე გექნებათ შენახული, პარაგრაფის textContent უნდა იყოს localStorage-ში ბოლოს შენახული

const p = document.getElementById('p-main');

const user = prompt("Enter any kind of word: ");

localStorage.setItem('word', user);

p.textContent = localStorage.getItem('word');
