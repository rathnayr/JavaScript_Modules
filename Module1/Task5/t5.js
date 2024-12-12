function leapYear() {
  const year = parseInt(document.getElementById('yearInput').value);
  const targetElement = document.getElementById('target');

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    targetElement.textContent = `${year} is a leap year.`;
  } else {
    targetElement.textContent = `${year} is not a leap year.`;
  }
}