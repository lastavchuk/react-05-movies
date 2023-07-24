import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: { api_key: '91e9e43bc5abd62bce4a412250ca2b4a', language: 'en-US' },
});

export async function fetchTopMovies() {
    const { data } = await instance.get('trending/all/day');

    return data;
}

export async function fetchSearchMovies(q) {
    const { data } = await instance.get('search/movie', {
        params: { query: q, include_adult: false },
    });

    return data;
}

export async function fetchMovieDetails(id) {
    const { data } = await instance.get(`movie/${id}`);

    return data;
}

export async function fetchMovieCredits(id) {
    const { data } = await instance.get(`movie/${id}/credits`);

    return data;
}
export async function fetchMovieReviews(id) {
    const { data } = await instance.get(`movie/${id}/reviews`);

    return data;
}
