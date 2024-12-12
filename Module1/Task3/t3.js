'use strict';

//Enter three numbers as you wish
const num_1= parseInt(prompt('Enter the first number:'));
const num_2= parseInt(prompt('Enter the second number:'));
const num_3= parseInt(prompt('enter the third number:'));


const sum = num_1 + num_2 + num_3;
const product = num_1 * num_2 * num_3;
const average = (num_1 + num_2 + num_3) / 3;

const targetDiv = document.querySelector('#target');

targetDiv.innerHTML = `
    <p>The first number is := ${num_1}</p>
    <p>The second number is := ${num_2}</p>
    <p>The third number is := ${num_3}</p>
    <p>The sum  is := ${sum}</p>
    <p>The product is := ${product}</p>
    <p>The average := ${average}</p>
`;