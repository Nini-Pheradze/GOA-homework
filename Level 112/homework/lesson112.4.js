// Export and Import a Function:
// Create a module file that exports a function (e.g., greet(name)). In another file, import and call that function.

export function greet(name) {
    console.log(`Hello, ${name}!`);
}


// Export Multiple Values:
// Create a module that exports multiple constants or functions (e.g., PI, area(), circumference()). Import them into another file and use them in calculations.

export const PI = 3.14;

export function area(radius) {
    return PI * radius * radius;
}

export function circumference(radius) {
    return 2 * PI * radius;
}

