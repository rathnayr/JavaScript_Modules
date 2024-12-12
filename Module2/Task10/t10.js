let candidates = [];
let numVoters = 0;
let currentVoter = 1;

function startVoting() {
    // Get the number of candidates
    numCandidates = parseInt(document.getElementById('numCandidates').value);
    if (isNaN(numCandidates) || numCandidates <= 0) {
        alert("Please enter a valid number of candidates.");
        return;
    }

    document.getElementById('numCandidates').disabled = true;
    document.getElementById('candidateInput').style.display = "block";

    let candidateInputDiv = document.getElementById('candidateNameInputs');
    candidateInputDiv.innerHTML = ''; // Clear previous inputs if any
    for (let i = 1; i <= numCandidates; i++) {
        let input = document.createElement('input');
        input.type = "text";
        input.id = "candidate" + i;
        input.placeholder = "Candidate " + i;
        candidateInputDiv.appendChild(input);
        candidateInputDiv.appendChild(document.createElement('br'));
    }
}

function startVotingProcess() {
    // Get the names of the candidates
    for (let i = 1; i <= numCandidates; i++) {
        let name = document.getElementById('candidate' + i).value;
        if (name) {
            candidates.push({ name: name, votes: 0 });
        } else {
            alert("Please enter all candidate names.");
            return;
        }
    }

    document.getElementById('candidateInput').style.display = "none";
    document.getElementById('votingProcess').style.display = "block";
}

function collectVotes() {
    // Get the number of voters
    numVoters = parseInt(document.getElementById('numVoters').value);
    if (isNaN(numVoters) || numVoters <= 0) {
        alert("Please enter a valid number of voters.");
        return;
    }

    document.getElementById('votingProcess').style.display = "none";
    askVoter();
}

function askVoter() {
    if (currentVoter > numVoters) {

        announceResults(candidates);
        return;
    }

    let voterVote = prompt("Voter " + currentVoter + ", please enter the candidate's name (or leave blank for an empty vote):");
    let candidate = candidates.find(c => c.name.toLowerCase() === voterVote.toLowerCase().trim());

    if (candidate) {
        candidate.votes++;
    }

    currentVoter++;
    askVoter();
}

function announceResults(candidates) {

    candidates.sort((a, b) => b.votes - a.votes);


    let resultText = "The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.\n\nResults:\n";
    for (let i = 0; i < candidates.length; i++) {
        resultText += candidates[i].name + ": " + candidates[i].votes + " votes\n";
    }

    document.getElementById('results').style.display = "block";
    document.getElementById('resultText').innerText = resultText;
}
