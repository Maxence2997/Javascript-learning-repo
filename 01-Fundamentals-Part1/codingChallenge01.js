const markWeights = 78;
const johnWeights = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markBMI = markWeights / (markHeight ** 2);

const johnBMI = johnWeights / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;

console.log('markBMI=' + markBMI, 'JohnBMI=' + johnBMI);
console.log(markHigherBMI);