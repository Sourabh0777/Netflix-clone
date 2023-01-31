

const API_key = "4d12c48d5ce7927500f892d571a8284a";
const requests = {
    fetchTrendig: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_key}`,

    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}`,

    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&anguage=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`,

    fetchComedyMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&with_geners=35`,

    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`,

    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,

    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_geners=99`

}

export default requests;