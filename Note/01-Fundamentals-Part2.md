# Note

- use **'use strict'** for strict mode at begin of javascript file to write secure code during development.

## Function

**Function Declaration**, **Function Expression** and **Arrow Function**

Function Expression allows us to create an **anonymous function** which doesn't have any function name which is the main difference between Function Expression and Function Declaration. A function expression can be used as an IIFE (Immediately Invoked Function Expression)which runs as soon as it is defined.

```javascript
console.log(printFruit(10, 3)); // Run normally

console.log(juice3(10, 3));     // Uncaught ReferenceError: 
console.log(juice2(10, 3));     // Cannot access ${function name} before initialization at ....
 
// Function Declaration
function printFruit(NumOfApple, NumOfOrange) {

    const juice = `Juice with ${NumOfApple} apples and ${NumOfOrange} oranges`;
    return juice;
}
// Function Expression
const juice2 = function (NumOfApple, NumOfOrange) {

    const juice = `Juice with ${NumOfApple} apples and ${NumOfOrange} oranges`;
    return juice;
}

// Arrow Function (like Lambda in Java)
const juice3 = (NumOfApple, NumOfOrange) => `Juice with ${NumOfApple} apples and ${NumOfOrange} oranges`;

const juice4 = (NumOfApple, NumOfOrange) => { 
    console.log(NumOfApple);
    return `Juice with ${NumOfApple} apples and ${NumOfOrange} oranges`;
}

console.log(printFruit(10, 3));
console.log(juice2(10, 3));
console.log(juice3(10, 3));
```

## Array

Array can contains different type of elements.

```Javascript
const friends = ['Michael', 'Max', 123];
const test = ['123', 123, friends];
```

Array can be initialized in these three ways:

```Javascript
const bills = [125, 555, 44];
const tips = new Array;
const totals = new Array();
```

## Object

Create an object

- **this** keyword can **only** be used in **expression function**, it wouldn't work in arrow function.

```Javascript
const max = {
    firstName: 'Maxence',
    lastName: 'Yang',
    birthYear: 1995,
    job: 'Programmer',
    friends: ['Mike', 'Joe', 'Joseph'],

    calcAge: function () { // function properties
        return 2037 - this.birthYear
    }

    //fullName: (txt) => { return this.firstName + txt + this.lastName } 
    //this keyword not work
};
```

Get properties in an object in these ways:

```javascript
console.log(max.firstName);             // Maxence
console.log(max['firstName']);          // Maxence

const nameKey = 'Name';
console.log(max['first' + nameKey]);    // Maxence
console.log(max.calcAge());

console.log(max['calcAge']); 
/* It will get result below

ƒ () { // function properties
        return 2037 - this.birthYear
    }

because it will take property "calcAge" as a value property.
*/ 
```

Add new properties into an object in these ways:

```Javascript
max.gender = 'Male';
max['sports'] = ['Football', 'Volleyball'];
```

