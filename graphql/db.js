// import fetch from 'node-fetch';
import axios from 'axios';

const BASE_API_URL = 'https://yts.mx/api/v2/';
const LIST_MOVIE_URL = `${BASE_API_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_API_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_API_URL}movie_suggestions.json`;


// Request API
// Get List of Movies
export const getMovies = async ( limit, rating ) => {
    const {
        data: {
             data: { movies } 
        }
    }  = await axios.get(LIST_MOVIE_URL,{
        params: {
            limit,
            minimum_rating: rating
        }
    })
    
    return movies;
}

// Get Detail of Movie
export const getMovie = async id => {
    const {
        data: {
            data: { movie }
        }
    } = await axios.get( MOVIE_DETAIL_URL, {
        params: {
            movie_id: id
        }
    })

    return movie;
}

// Get suggestion of movie
export const getSuggestions = async id =>{
    const {
        data: {
            data: { movies }
        }
    } = await axios.get( MOVIE_SUGGESTIONS_URL, {
        params:{
            movie_id: id
        }
    })

    return movies;

}


// //getMovies (node-fetch)
// export const getMovies = ( limit, minimum_rating )=>{
//     let REQUEST_URL = API_URL;
//     if(limit > 0){
//         REQUEST_URL += `limit=${limit}`;
//     }
//     if(minimum_rating > 0){
//         REQUEST_URL += `&minimum_rating=${minimum_rating}`;  
//     }
//     // Fetch
//     return fetch(REQUEST_URL)
//         .then(res => res.json())
//         .then(json => json.data.movies);
// }
