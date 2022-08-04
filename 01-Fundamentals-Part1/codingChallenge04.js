const bill = 270;

const percentage = (50 <= bill && bill <= 300) ? 15 / 100 : 20 / 100;

const tip = bill * percentage;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`);