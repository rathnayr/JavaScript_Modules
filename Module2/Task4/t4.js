function getNumbers() {
    const numbers = [];
    while (true) {
        let input = prompt("Enter a number:");

        if (input === null) {
            break;
        }

        input = parseInt(input);

        if (isNaN(input)) {
            alert("Please enter a valid number.");
        } else if (input === 0) {
            break;
        } else {
            numbers.push(input);
        }
    }

    numbers.sort((a, b) => b - a);

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "Sorted Numbers (Largest to Smallest):<br>" + numbers.join("<br>");
}