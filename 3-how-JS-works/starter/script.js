///////////////////////////////////////
// Lecture: Hoisting

/**
 * Hoisting - functions and variables are available before execution phase starts. 
 * 
 * Functions are already defined, but variables are undefined and 
 * will be defined during execution phase.
 * 
 * Hoisting for function works only with function declarations, example below.
 * 
 * Most important use case for hoisting is that we can use function declarations before we actually declare them in code.
 */

/** FUNCTION HOSTING  */
/**
 * Hoisting works with FUNCTION DECLARATIONS
 */
calculateAge(1990);

function calculateAge(year) {
    console.log(2019 - year);
}
/*
* Hoisting does not work with FUNCTION EXPRESSIONS
*/
retirement(1956);

var retirement = function(year) {
    console.log(65 - (2019 - year));
}

/** VARIABLES HOSTING  */
console.log(age); //returns undefined - Javascript knows there is definition of varaible but does not know value yet
var age = 20;
console.log(age);

function foo() {
    console.log(age); // undefined
    var age = 65;
    console.log(age); // 65
}
foo();
console.log(age); // 20

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









