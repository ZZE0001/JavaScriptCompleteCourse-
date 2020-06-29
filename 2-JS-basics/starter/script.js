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

console.log('\nCODING CHALLENGE 2 - Average score for each basketball team');

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

console.log('\nCODING CHALLENGE 3 - Calculate Tips');

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

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John 
compared their BMIs. Let's now implement the same functionality 
with objects and methods.
1. For each of them, create an object with properties for their 
full name, mass, and height
2. Then, add a method to each object to calculate the BMI. 
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, 
together with the full name and the respective BMI. 
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

GOOD LUCK 😀
*/

console.log('\nCODING CHALLENGE 4 - Calculate BMIs using objects and methods');

// note: having the same method in both object viloates the DRY principle,
// later in advanced section of the course we will correct it and make the same method on multiple objects
// without repeating code.
let mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI;
    }
}

let john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI; // so that we can calculate and read values in one take
    }
}

// call methods
// mark.calcBMI();
// john.calcBMI();
console.log(mark, john);

// print who has highest BMI
if (mark.calcBMI() > john.calcBMI()) { // calls methods and reads at the same time, calculate only once
    console.log(mark.name + ' has higher BMI with ' + mark.BMI);
} else if (mark.BMI < john.BMI) {
    console.log(john.name + ' has higher BMI with ' + john.BMI);
} else {
    console.log(mark.name + ' and ' + john.name + ' have the same BMI with ' + mark.BMI);
}

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? 
Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. 
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less 
than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and
do the tip calculations
4. As an output, create 1) a new array containing all tips, 
and 2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, 
going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is 
less than $100, 10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the 
current sum in a variable (starting from 0). After you have the sum of the array, 
divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

console.log('\nCODING CHALLENGE 5 - Calculate Tips - Advanced');

let john_CD5 = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTips: function (){
        // creates new arrays
        this.tips = [];
        this.totals = [];

        //iterates over bills array
        for (let i = 0; i < this.bills.length; i++) {

            // defines variables
            let bill = this.bills[i];
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
            
            // calculates tip and adds tip to array
            this.tips[i] = bill * percentage;

            // calculates total and adds to array
            this.totals[i] = bill + bill * percentage;

        }

    }
    
}

let mark_CD5 = {
    name: 'Mark',
    bills: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calcTips: function (){

        //iterate over bills array
        for (let i = 0; i < this.bills.length; i++) {

            // defines variables
            let bill = this.bills[i];
            let percentage;

            // calculates tip
            if (bill < 100) {
                // tip 20% of the bill when the bill is less than $100
                percentage = .2;
            } else if (bill > 300) {
                // tip 10% if the bill is more than $300
                percentage = .25;
            } else {
                // tip 10% when the bill is between $100 and $300
                percentage = .1;
            }
            let tip = bill * percentage;

            // adds tip to array
            this.tips.push(tip);

            // calculates total and add to array
            this.calcTotals(bill, tip);

        }

    },
    calcTotals: function(bill, tip){

                //calculate total
                let total_CD5 = bill + tip;

                //add total to array
                this.totals.push(total_CD5);

    }
    
}

// average tips
// we do average calc as function to not repeat code in both objects
function avgTips(arrayTips){

     // sum array
    let sum = 0;
    for(i = 0; i < arrayTips.length; i++) {
        sum += arrayTips[i];
    }

    // calculate average
    return sum/arrayTips.length;
}

// call methods
john_CD5.calcTips();
mark_CD5.calcTips();
console.log(john_CD5, mark_CD5);

// calculates average and stores in each object
john_CD5.avgTip = avgTips(john_CD5.tips);
mark_CD5.avgTip = avgTips(mark_CD5.tips);


// print who's family paid highest average tip
if (mark_CD5.avgTip > john_CD5.avgTip) {
    console.log('Mark\'s family paid higher tips with average ' + mark_CD5.avgTip);
} else if (mark_CD5.avgTip < john_CD5.avgTip) {
    console.log('John\'s family paid higher tips with average ' + john_CD5.avgTip);
} else {
    console.log('Mark\'s and John\'s families paid same amount of tips with average ' + mark_CD5.avgTip);
}