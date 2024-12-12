'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetElement = document.getElementById("target");

let listItems = "";

for (let name of names) {
  listItems += `<li>${name}</li>`;
}

targetElement.innerHTML = listItems;