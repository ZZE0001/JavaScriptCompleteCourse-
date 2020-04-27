/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// console.log('test');

// defines Marks and Johns parameters
var massMark, heightMark, massJohn, heightMark;
massMark = 80; // kg
heightMark = 1.90; // meters

massJohn = 100;
heightJohn = 2.10;

// calculates Marks and John BMIs
BMI_Mark = massMark / (heightMark * heightMark);
BMI_John = massJohn / (heightJohn * heightJohn);
// prints number type 
console.log(BMI_Mark,
            BMI_John);

// compares and prints
var compare = BMI_Mark > BMI_John;
console.log('Is Mark\'s BMI higher than John\'s? ' + '\n' + compare);

