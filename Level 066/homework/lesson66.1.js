// Show a confirm box asking a question. The result (true or false) is logged to the console.
// Show a confirm box when a button is clicked. Store the result in a variable.

function confirmBox(){
    let result = confirm("Do you Want to get?");

    alert("Result:"  + result);
}
confirmBox()

// Display a confirm box on page load. Immediately show the result in an alert.

const result = confirm("Do you want to continue?");
alert(result);