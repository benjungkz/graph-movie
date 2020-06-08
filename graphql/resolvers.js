import { getMovies } from './db';


// Resolvers
const resolvers = {
    Query: {
        movies: ( _ ,{ limit, minimum_rating }) => getMovies(limit, minimum_rating),
    }
};

// Export
export default resolvers;
