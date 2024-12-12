function checkPrime() {
    let num = prompt("Enter an integer:");

    if (num === null || num.trim() === '') {
        document.getElementById('result').textContent = 'No number was entered.';
        return;
    }

    num = Number(num);

    if (isNaN(num) || !Number.isInteger(num)) {
        document.getElementById('result').textContent = 'Please enter a valid integer.';
        return;
    }

    if (num <= 1) {
        document.getElementById('result').textContent = `${num} is not a prime number.`;
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.getElementById('result').textContent = `${num} is a prime number.`;
    } else {
        document.getElementById('result').textContent = `${num} is not a prime number.`;
    }
}