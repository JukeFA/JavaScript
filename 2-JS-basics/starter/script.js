/**********
 * Variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher'
console.log(job);

//variable naming rules
var $3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/


/**********
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/**********
* Basic Operators
*/
/*
var year, yearJohn, yearMark
now = 2018;
ageJohn = 28;
ageMark = 33;


yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//logical operators

var johnOlder = ageJohn > ageMark;

console.log(johnOlder);

//typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'mark is older than john');
var x;
console.log(typeof x);
*/

/**********
* Basic Operators
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6 // 26
console.log(x);

// More Operators
x *= 2;
console.log(x);

x += 10;
console.log(x);
*/

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

/**********
* If / Else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
};

var isMarried = false;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
};