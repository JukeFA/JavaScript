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

/* 
var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
/*

/**********
If / Else statements
*/


/* var firstName = 'John';
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

var massMark = 78;
var heightMark = 1.69;

var massJohn = 192;
var heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
} */
//var markHigherBMI = bmiMark > bmiJohn;
//console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

/**********
Boolean Logic
*/

/* var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.');
} */


/**********
The Ternary Operator and Switch Statements
*/

/* 
var firstName = 'John';
var age = 16;
//Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
 */

 /**********
  * Truthy and Falsy Values and equality operators
*/

// falsy values: undefined, null, 0,'', NaN
// truthy values: NOT falsy values
/* 
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

//equality operators
if (height == '23') {
    console.log('The == operator does type coercion')
}
 */

/**********
Coding Challenge 2
*/
/* 
var avgJohn = (114 + 120 + 103) / 3;
var avgMike = (116 + 94 + 123) / 3;
var avgMary = (97 + 134 + 105) / 3;

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John\'s team averages ' + avgJohn + ' points per game, which is more than Mike\'s and Mary\'s team');
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log('Mike\'s team averages ' + avgMike + ' points per game, which is more than John\'s and Mary\'s team');
} else {
    console.log('Mary\'s team averages ' + avgMary + ' points per game, which is more than John\'s and Mike\'s team');
}
 */

/**********
Functions
*/
/* 
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
 */

/**********
Functions statements and expressions
*/
/* 
//Function declaration
// function whatDoYouDo(job, firstName) {}


//Function Expression
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code'
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }  
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

 */

/**********
Arrays
*/

/* 
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
 */

/**********
Coding challenge 3
*/
/* 
var tipCalculator = function (bill) {
    switch (bill) {
        case bill < 50 :
            return bill * .2;
        case bill >=50 && bill <= 200 :
            return bill * .15 ; 
        case bill > 200 :
            return bill * .1;
    }
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];

 */
/**********
Objects and Properties
*/
/* 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
 */

/**********
Objects and methods
*/

/* 
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
 */

/**********
Coding Challenge 4
*/

/* 
var john = {
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};
john.calcBMI();

var mark = {
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};

mark.calcBMI();

if (mark.bmi > john.bmi) {
    console.log('Mark\'s bmi of ' + mark.bmi + ' is higher than John\'s.');
} else if (mark.bmi < john.bmi) {
    console.log('John\'s bmi of ' + john.bmi + ' is higher than Mark\'s.');
} else {
    console.log('Their BMI\'s are the same.');
}
 */

/**********
Coding Challenge 4 !!Find this!!
*/

/**********
Loops and Iteration
*/

for (var i = 1; i < 20; i += 2){
    console.log(i);
} 

// var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];
/*
//For loop
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//While loop
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/
//continue and break statements

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

// sips the false options and moves to the next item
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

// exits out of the string
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// looping backwards
for (var i = john.length - 1 ; i >= 0; i-- ) {
    console.log(john[i]);
}

/**********
coding challenge 5
*/
var bill = [ ];
var tip = [ ];



var tipCalculator = function (bill) {
    switch (bill) {
        case bill < 50 :
            return bill * .2;
        case bill >=50 && bill <= 200 :
            return bill * .15 ; 
        case bill > 200 :
            return bill * .1;
    }
}