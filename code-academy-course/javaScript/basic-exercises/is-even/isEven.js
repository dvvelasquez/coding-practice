// Write a JavaScript function isEven to check if a number is even (hint: returns boolean)

// Create a function that passes one parameter
    // create a loop to iterate all the numbers
        // add an early return if first condition is not met
        // add a condition to verify if No can be devided by 2 with no remainder
        // if number is even, return message that the given No is even
        // otherwise return a try again message
    // Call function and pass the number to be tested

const isEven = (num) => {
    const output = document.querySelector('.output');
    evenNo = num % 2 === 0
    output.innerHTML = evenNo;
}

isEven(10);
