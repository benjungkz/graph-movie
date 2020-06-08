import { getMovies, getIdById, deleteMovie, addMoive } from './db';


// Resolvers
const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: ( _ , { id } ) => getIdById(id)
    },
    Mutation: {
        addMovie: ( _ , { name, score } ) => addMoive( name, score ),
        deleteMovie: ( _ , {id} ) => deleteMovie(id)
    }
};

// Export
export default resolvers;
