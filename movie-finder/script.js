document.getElementById('search-btn').addEventListener('click', function() {
    let searchTerm = document.getElementById('search-input').value.trim();
    if (searchTerm !== '') {
        fetchMovies(searchTerm);
    }
});

document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let searchTerm = document.getElementById('search-input').value.trim();
        if (searchTerm !== '') {
            fetchMovies(searchTerm);
        }
    }
});

async function fetchMovies(searchTerm) {
    const apiKey = 'bccccb35';  // Your OMDB API key
    const apiUrl = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            document.getElementById('results').innerHTML = `<p>No results found for "${searchTerm}".</p>`;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('results').innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}

function displayMovies(movies) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = `
            <div class="movie-card">
                <img src="${movie.Poster !== "N/A" ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
                <div class="movie-info">
                    <h2>${movie.Title}</h2>
                    <p><strong>Year:</strong> ${movie.Year}</p>
                    <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">View on IMDb</a>
                </div>
            </div>
        `;
        resultsContainer.innerHTML += movieCard;
    });
}
