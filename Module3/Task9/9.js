document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("start");
    const resultElement = document.getElementById("result");

    button.addEventListener("click", () => {
        const calculation = document.getElementById("calculation").value.trim();
        let num1, num2, result;

        if (calculation.includes('+')) {
            [num1, num2] = calculation.split('+').map(Number);
            result = num1 + num2;
        } else if (calculation.includes('-')) {
            [num1, num2] = calculation.split('-').map(Number);
            result = num1 - num2;
        } else if (calculation.includes('*')) {
            [num1, num2] = calculation.split('*').map(Number);
            result = num1 * num2;
        } else if (calculation.includes('/')) {
            [num1, num2] = calculation.split('/').map(Number);
            if (num2 === 0) {
                resultElement.textContent = "Cannot divide by zero.";
                return;
            }
            result = Math.floor(num1 / num2);
        } else {
            resultElement.textContent = "Invalid operation.";
            return;
        }

        resultElement.textContent = `Result: ${result}`;
    });
});