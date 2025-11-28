class Student {
    constructor(name, surname, email, password) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
}

const form= document.getElementById("form-main");
const infoSection = document.getElementById("info-section");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newStudent = new Student(form.elements.name.value, form.elements.surname.value, form.elements.email.value, form.elements.password.value);

    const newDiv = document.createElement("div");
    for (let key in newStudent) {
        const newP = document.createElement("p");
        newP.textContent = `${newStudent[key]}`;
        newDiv.appendChild(newP);
    }
    infoSection.appendChild(newDiv);
});