// შექმენით ფორმა, რომელსაც მიანიჭებთ id-ს. ამ ფორმაში დაამატეთ ერთი ინფუთი და მას გაუწერეთ name ატრიბუტი. როდესაც ფორმა დადასტურდება, ვებსაიტი არ უნდა დარეფრეშდეს და ამ ინფუთის value უნდა გამოიტანოს alert box-მა

function getinputValue(e){
    e.preventDefault();

    // get the form
    let ourForm = document.getElementById("form1");

    // get input's value
    let nameInput = ourForm.elements.input1.value;

    // Output the data
    alert(nameInput);

    // clear the form
    ourForm.reset()
}
