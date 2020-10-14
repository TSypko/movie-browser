const apiKey = "8b1e08fa98bbe27c329cdd337e163ed0";
const language = "en-US";
const keyAndLanguageParameters = `api_key=${apiKey}&language=${language}`;

const getMovieUrl = id => `https://api.themoviedb.org/3/movie/${id}?${keyAndLanguageParameters}`;
const getMovieCreditsUrl = id => `https://api.themoviedb.org/3/movie/${id}/credits?${keyAndLanguageParameters}`;
const getPopularMoviesUrl = page => `https://api.themoviedb.org/3/movie/popular?${keyAndLanguageParameters}&page=${page}`;
const getSearchMoviesByQueryUrl = (page, query) => `https://api.themoviedb.org/3/search/movie?${keyAndLanguageParameters}&query=${query}&page=${page}`;

const getPersonUrl = id => `https://api.themoviedb.org/3/person/${id}?${keyAndLanguageParameters}`;
const getPersonCreditsUrl = id => `https://api.themoviedb.org/3/person/${id}/movie_credits?${keyAndLanguageParameters}`;
const getPopularPeopleUrl = page => `https://api.themoviedb.org/3/person/popular?${keyAndLanguageParameters}&page=${page}`;
const getSearchPeopleByQueryUrl = (page, query) => `https://api.themoviedb.org/3/search/person?${keyAndLanguageParameters}&query=${query}&page=${page}`;

const getGenresUrl = () => `https://api.themoviedb.org/3/genre/movie/list?${keyAndLanguageParameters}`;

const fetchFromApi = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
}

export const getMovie = id => fetchFromApi(getMovieUrl(id));
export const getMovieCredits = id => fetchFromApi(getMovieCreditsUrl(id));
export const getPopularMovies = page => fetchFromApi(getPopularMoviesUrl(page));
export const searchForMovie = (page, query) => fetchFromApi(getSearchMoviesByQueryUrl(page, query));
export const getPerson = id => fetchFromApi(getPersonUrl(id));
export const getPersonCredits = id => fetchFromApi(getPersonCreditsUrl(id));
export const getPopularPeople = page => fetchFromApi(getPopularPeopleUrl(page));
export const searchForPeople = (page, query) => fetchFromApi(getSearchPeopleByQueryUrl(page, query));
export const getGenres = () => fetchFromApi(getGenresUrl());