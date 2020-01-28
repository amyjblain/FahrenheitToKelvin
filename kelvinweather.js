// the forecast today is 293 Kelvin
const kelvin = 293;
// celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;
// converting c to f
let fahrenheit = celsius * (9/5) + 32;
// Causes the math library to round down the F temp
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log('The temperature is ' + newton + ' degrees Newton');