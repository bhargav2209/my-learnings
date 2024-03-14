// You declare variables in JavaScript using the {var}, {let}, or {const}
// {var} was traditionally used to declare variables in JavaScript but has been largely replaced by {let} and {const} in modern JavaScript
// {let} allows you to declare variables that can be reassigned a new value
// {const} allows you to declare variables with a constant value, meaning once assigned, their value cannot be changed
//      Naming Conventions: Variable names can contain letters, digits, underscores, and dollar signs. They must begin with a letter,
// an underscore (_) or a dollar sign ($). Variable names are case-sensitive (myVariable is different from MyVariable)
// Assigning Values: You can assign values to variables using the assignment operator =. [ let myVariable = 10; ]

var myNumber = 10; // number
let myString = "Hello, world!"; // string
let myBoolean = true; // boolean
const myArray = [1, 2, 3]; // array
const myObject = {name: "John", age: 30}; // object
let myFunction = function() {
    console.log("Hello!");
    console.log("myNumber! ==> ", myNumber);
    console.log("myString! ==> ", myString);
    console.log("myBoolean! ==> ", myBoolean);
    console.log("myArray! ==> ", myArray);
    console.log("myObject! ==> ", myObject);
};
myFunction();
