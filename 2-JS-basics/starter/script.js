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



console.log('CODING CHALLENGE 1 - Calculate BMIs');

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
console.log('Mark\'s BMI is ' + BMI_Mark,
            'John\'s BMI is ' + BMI_John);

// compares and prints
if (BMI_Mark > BMI_John) {
    console.log('Mark\'s BMI higher than John\'s.');
} else {
    console.log('John\'s BMI higher than Mark\'s.');
}



/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

console.log('CODING CHALLENGE 2 - Average score for each basketball team');

// calculates average for each team
johnsTeamScoreAverage   = (89+120+103)/3;
mikesTeamScoreAverage   = (116+94+123)/3;
mariasTeamScoreAverage  = (97+134+105)/3;

// testing calculation with different scores, including draw scenario
// johnsTeamScoreAverage = (200+200+200)/3;
// mikesTeamScoreAverage = (200+200+200)/3;
// mariasTeamScoreAverage  = (200+200+200)/3;

// prints average for each team
console.log(' John\'s team scores average '     + johnsTeamScoreAverage     + ' points \n',
            'Mike\'s team scores average '      + mikesTeamScoreAverage     + ' points \n',
            'Maria\'s team scores average '     + mariasTeamScoreAverage    + ' points \n');

// print which team has highest average when there are two teams
// if (johnsTeamScoreAverage === mikesTeamScoreAverage) {
//     console.log(' It is a draw! Both John\'s and Mike\'s teams have the same average score with ' + johnsTeamScoreAverage + ' points');
// } else if (johnsTeamScoreAverage > mikesTeamScoreAverage) {
//     console.log(' John\'s team has highest average score with ' + johnsTeamScoreAverage + ' points');
// } else {
//     console.log(' Mike\'s team has highest average score with ' + mikesTeamScoreAverage + ' points');
// }

// print which team has highest average when there are three teams
switch (true){
    case johnsTeamScoreAverage > mikesTeamScoreAverage && johnsTeamScoreAverage > mariasTeamScoreAverage:
        console.log(' John\'s team has highest average score with ' + johnsTeamScoreAverage + ' points');
        break;
    case mikesTeamScoreAverage > johnsTeamScoreAverage && mikesTeamScoreAverage > mariasTeamScoreAverage:
        console.log(' Mike\'s team has highest average score with ' + mikesTeamScoreAverage + ' points');
        break;
    case mariasTeamScoreAverage > johnsTeamScoreAverage && mariasTeamScoreAverage > mikesTeamScoreAverage:
        console.log(' Maria\'s team has highest average score with ' + mariasTeamScoreAverage + ' points');
        break;
    case johnsTeamScoreAverage === mikesTeamScoreAverage && johnsTeamScoreAverage === mariasTeamScoreAverage:
        console.log(' It is a draw! All three teams have the same average score with ' + johnsTeamScoreAverage + ' points');
        break;
    case johnsTeamScoreAverage === mikesTeamScoreAverage:
        // we know Maria does not have highest score because otherwise code would not run this far
        console.log(' It is a draw! Both John\'s and Mike\'s teams have the same average score with ' + johnsTeamScoreAverage + ' points');
        break;
    case johnsTeamScoreAverage === mariasTeamScoreAverage:
        console.log(' It is a draw! Both John\'s and Maria\'s teams have the same average score with ' + johnsTeamScoreAverage + ' points');
        break;
    case mikesTeamScoreAverage === mariasTeamScoreAverage:
        console.log(' It is a draw! Both Mike\'s and Maria\'s teams have the same average score with ' + mikesTeamScoreAverage + ' points');
        break;
    default:
        console.log('No answer found!');
}

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

console.log('CODING CHALLENGE 3 - Calculate Tips');

// variables
let bill, tip;
let bills = [124, 48, 268];
let tips = [];
let totals = [];

// calculates tip and adds to array
function calculateTip(bill){
    
    let percentage;

    // calculates tip
    if (bill < 50) {
        // tip 20% of the bill when the bill is less than $50
        percentage = .2;
    } else if (bill > 200) {
        // tip 10% if the bill is more than $200
        percentage = .1;
    } else {
        // tip 15% when the bill is between $50 and $200
        percentage = .15;
    }
    tip = bill * percentage;

    // adds tip to array
    tips.push(tip);

    // calculates total and add to array
    calculateTotal(bill, tip);

}

//calculates total (bill + tip) and adds to array
function calculateTotal(bill, tip){
    //calculate total
    total = bill + tip;

    //add total to array
    totals.push(total);
}

// initializes tip calculation
calculateTip(bills[0]);
calculateTip(bills[1]);
calculateTip(bills[2]);

// prints all arrays
console.log('Bills '    + bills);
console.log('Tips '     + tips);
console.log('Totals '    + totals);