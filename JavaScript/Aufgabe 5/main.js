async function getMovie(movieTitle) {
    const apiKey = 'b6003d8a';
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No internet connection!');
        }
        const data = await response.json();

        if (data.Response === 'False') {
            throw new Error(data.Error);
        }

        console.log(`Title: ${data.Title}`);
        console.log(`Year: ${data.Year}`);
        console.log(`Genre: ${data.Genre}`);
        console.log(`Plot: ${data.Plot}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

getMovie('Hachiko');
