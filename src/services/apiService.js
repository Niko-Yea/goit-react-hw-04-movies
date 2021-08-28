const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'a7df05712af40d9fd0f1051ddd8064e4';

function fetchMovies(url = '') {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export function fetchTrendingList() {
  return fetchMovies(`${BASE_URL}/trending/movie/week?api_key=${KEY}`);
}

export function fetchMovieById(id) {
  return fetchMovies(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
}

export function fetchCastById(id) {
  return fetchMovies(`${BASE_URL}/movie/${id}/credits?page=1&api_key=${KEY}`);
}

export function fetchReviews(id) {
  return fetchMovies(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`);
}

export function fetchSearchMovie(query) {
  return fetchMovies(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`);
}