// Create a function with a local variable and attempt to access it outside the function. Explain what happens and why.

function myfunction() {
    let local = "I'm local!";
    console.log(local);
}

myfunction();

console.log(local);

// Write nested functions where an inner function modifies a variable from its outer function's scope. Track how the value changes before and after the inner function call.

function outer() {
    let counter = 0;
    console.log("Before inner():", counter);

    function inner() {
        counter += 1;
        console.log("Inside inner():", counter); 
    }

    inner();

    console.log("After inner():", counter); 
}

outer();


// Demonstrate the difference between var, let, and const in terms of scope inside a block {} and a function.

function testScope() {
    if (true) {
        var a = 1;
        let b = 2;    
        const c = 3;   
    }

    console.log(a); 
    console.log(b); 
    console.log(c); 
}

testScope();