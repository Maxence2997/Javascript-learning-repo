'use strict';

// let hasDriverLicense = false;
// const passTest = true;

function logger() {
    console.log('HAHAHAHA');
}

logger();

function printFruit(NumOfApple, NumOfOrange) {

    console.log(NumOfApple, NumOfOrange);
    const juice = `Juice with ${NumOfApple} apples and ${NumOfOrange} oranges`;
    return juice;
}

console.log(printFruit(10, 3));

