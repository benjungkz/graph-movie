import { getMovies, getMovie, getSuggestions } from './db';


// Resolvers
const resolvers = {
    Query: {
        movies: ( _, { limit, rating }) => getMovies( limit, rating ),
        movie: ( _, { id }) => getMovie( id ),
        suggestions: ( _, { id } ) => getSuggestions( id )
    }
};

// Export
export default resolvers;
