function listParticipants() {
    const numParticipants = parseInt(prompt("Enter the number of participants:"));

    if (isNaN(numParticipants) || numParticipants <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    const participantNames = [];
    for (let i = 0; i < numParticipants; i++) {
        const participantName = prompt(`Enter the name of participant ${i + 1}:`).trim();
        if (participantName) {
            participantNames.push(participantName);
        } else {
            alert("Name cannot be empty. Please try again.");
            i--; // Retry for the same index
        }
    }

    participantNames.sort();

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "<ol>" + participantNames.map(name => `<li>${name}</li>`).join("") + "</ol>";
}