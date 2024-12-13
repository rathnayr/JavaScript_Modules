document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const queryInput = document.getElementById("query");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const query = queryInput.value.trim();
        if (!query) {
            console.error("Please enter a TV series name.");
            return;
        }

        const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Search Results:", data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    });
});
