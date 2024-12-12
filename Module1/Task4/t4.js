function chooseHouse() {
  const name = document.getElementById('studentName').value;

  const numbers = [1, 2, 3, 4];
  const houseNumber = numbers[Math.floor(Math.random() * numbers.length)];

  let house;

  switch (houseNumber) {
      case 1:
          house = 'Gryffindor';
          break;
      case 2:
          house = 'Slytherin';
          break;
      case 3:
          house = 'Hufflepuff';
          break;
      case 4:
          house = 'Ravenclaw';
          break;
  }

  document.getElementById('target').textContent = `${name}, you are ${house}.`;
}