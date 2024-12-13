// Add an event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const query = document.getElementById('query').value;
        const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`; 

        try {
            const response = await fetch(url); 
            const data = await response.json(); 
            console.log(data); 
        } catch (error) {
            console.error('Error fetching data:', error); 
        }
    });
});

