function findLeapYears() {
    let startYear = prompt("Enter the start year:");
    let endYear = prompt("Enter the end year:");

    if (startYear === null || endYear === null || startYear.trim() === '' || endYear.trim() === '') {
        document.getElementById('result').textContent = 'Please enter valid start and end years.';
        return;
    }

    startYear = Number(startYear);
    endYear = Number(endYear);

    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        document.getElementById('result').textContent = 'Please enter valid numbers and ensure the start year is less than or equal to the end year.';
        return;
    }

    let leapYears = '<ul>';
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears += `<li>${year}</li>`;
        }
    }
    leapYears += '</ul>';

    if (leapYears === '<ul></ul>') {
        document.getElementById('result').textContent = 'No leap years found in the given interval.';
    } else {
        document.getElementById('result').innerHTML = `Leap years between ${startYear} and ${endYear}:` + leapYears;
    }
}