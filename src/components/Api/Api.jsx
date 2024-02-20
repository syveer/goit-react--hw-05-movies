import axios from 'axios';

const keyUrl = '9ac8dc50828ed4aa0cb37be4516a48d0';

export async function fetchMovies() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      {
        params: {
          api_key: keyUrl,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFindMovie(query) {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          query: `${query}`,
          include_adult: false,
          language: 'en-US',
          page: 1,
          api_key: keyUrl,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: keyUrl,
          language: 'en-US',
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCredits(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        params: {
          api_key: keyUrl,
          language: 'en-US',
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchReviews(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      {
        params: {
          api_key: keyUrl,
          language: 'en-US',
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
