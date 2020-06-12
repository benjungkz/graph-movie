import { getMovies, getMovie } from './db';


// Resolvers
const resolvers = {
    Query: {
        movies: ( _, { limit, rating }) => getMovies( limit, rating ),
        movie: ( _, { id }) => getMovie( id )
    }
};

// Export
export default resolvers;
