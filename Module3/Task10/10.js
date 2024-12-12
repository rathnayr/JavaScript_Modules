document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("source");
    const target = document.getElementById("target");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = document.querySelector('input[name="firstname"]').value;
        const lastName = document.querySelector('input[name="lastname"]').value;

        target.textContent = `Your name is ${firstName} ${lastName}`;
    });
});