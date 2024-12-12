function squareRootNumber() {
  if (confirm("Should I calculate the square root?")) {
      let number = prompt("Enter a number:");

      if (number === null || number.trim() === '') {
          document.getElementById('result').textContent = 'No number was entered.';
      } else {
          number = Number(number);

          if (isNaN(number)) {
              document.getElementById('result').textContent = 'Invalid input. Please enter a valid number.';
          } else if (number < 0) {
              document.getElementById('result').textContent = 'The square root of a negative number is not defined.';
          } else {
              const squareRoot = Math.sqrt(number);
              document.getElementById('result').textContent = `The square root of ${number} is ${squareRoot}.`;
          }
      }
  } else {
      document.getElementById('result').textContent = 'The square root is not calculated.';
  }
}