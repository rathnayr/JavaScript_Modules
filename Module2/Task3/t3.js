function listDogNames() {
    const dogs = [];
    for (let i = 0; i < 6; i++) {
        const name = prompt(`Enter the name of dog ${i + 1}:`).trim();
        if (name) {
            dogs.push(name);
        } else {
            alert("Name cannot be empty. Please enter a valid name.");
            i--;
        }
    }

    dogs.sort().reverse();

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "<ul>" + dogs.map(dog => `<li>${dog}</li>`).join("") + "</ul>";
}