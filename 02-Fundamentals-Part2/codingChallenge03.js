/* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!".

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. */

const mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        const bmi = this.mass / this.height ** 2;
        return bmi;
    }
}

const john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        const bmi = this.mass / this.height ** 2;
        return bmi;
    }
}

mark.bmi = mark.calcBMI();
john.bmi = john.calcBMI();

let higher = {
    name: '',
    bmi: 0
};
let lower = {
    name: '',
    bmi: 0
};

if (mark.bmi > john.bmi) {
    higher.name = 'Mark';
    higher.bmi = mark.bmi;
    lower.name = 'John';
    lower.bmi = john.bmi;
} else {
    lower = 'Mark';
    lower.bmi = mark.bmi;
    higher = 'John';
    higher.bmi = john.bmi;
}

console.log(`${higher.name}'s BMI (${higher.bmi}) is higher than ${lower.name}'s (${lower.bmi})!`);
