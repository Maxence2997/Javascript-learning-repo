'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// function logger() {
//     console.log('HAHAHAHA');
// }

// //console.log(juice3(10, 3));
// console.log(printFruit(10, 3));
// //console.log(juice2(10, 3));

// function printFruit(NumOfApple, NumOfOrange) {

//     const juice = `Juice with ${NumOfApple} apples and ${NumOfOrange} oranges`;
//     return juice;
// }

// const juice2 = function (NumOfApple, NumOfOrange) {

//     const juice = `Juice with ${NumOfApple} apples and ${NumOfOrange} oranges`;
//     return juice;
// }

// console.log(printFruit(10, 3));
// console.log(juice2(10, 3));

// const juice3 = (NumOfApple, NumOfOrange) => {
//     console.log(NumOfApple);
//     return `Juice with ${NumOfApple} apples and ${NumOfOrange} oranges`;
// }

// console.log(juice3(10, 3));

// const years = new Array(1991, 1992, 1993);

// const friends = ['Michael', 'Max', 123];

// friends.shift();

const max = {
    firstName: 'Maxence',
    lastName: 'Yang',
    birthYear: 1995,
    job: 'Programmer',
    friends: ['Mike', 'Joe', 'Joseph'],

    calcAge: function () { // function properties
        return 2037 - this.birthYear
    },

    //fullName: (txt) => { return this.firstName + txt + this.lastName }

};


console.log(max.firstName);
console.log(max['firstName']);

const nameKey = 'Name';
if (max['first' + nameKey]) {
    console.log(max['first' + nameKey]);
} else {
    console.log(`Wrong answer`);
}

max.gender = 'Male';
max['sports'] = ['Football', 'Volleyball'];
console.log(max);

console.log(`${max.firstName} has ${max.friends.length} friends. The best friend is ${max.friends[1]}`);

console.log(max.calcAge());
console.log(max['calcAge']());

//console.log(max.fullName());