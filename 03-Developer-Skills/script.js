// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log("");

const measureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degree celsius"),
  };

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());
