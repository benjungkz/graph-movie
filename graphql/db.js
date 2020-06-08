// Connect with DB
let movies = [
    {
        id: 1,
        name: "Citizen Kein",
        score: 8
    },
    {
        id: 2,
        name: "Madmax-4DX",
        score: 10
    },
    {
        id: 3,
        name: "Parasite",
        score: 9
    },
    {
        id: 4,
        name: "Mother",
        score: 9.5
    }
];

// getMovies
export const getMovies = () => movies;

// getMovie
export const getIdById = id => {
    const filteredMovie = movies.filter(movie => id === movie.id);
    return filteredMovie[0];
}

//deleteMovie
export const deleteMovie = id =>{
    const cleanedMovie = movies.filter(movie => id !== movie.id);
    
    //Validation
    if( movies.length > cleanedMovie.length ){
        // Mutation
        movies = cleanedMovie;
        return true;
    }else{
        return false;
    }
}

//AddMovie
export const addMoive = ( name, score ) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };

    movies.push(newMovie);

    return newMovie;
}
