// On form submit, log the value of the input with name="username" to the console.
function userName(e){
    e.preventDefault();

    let ourForm = document.getElementById("form1");

    let inputInfo = ourForm.elements.username.value;

    alert(inputInfo);

    ourForm.reset()
}

// On a button click, clear the value of the input with name="email".



// On a button click, alert the value of the input with name="phone".