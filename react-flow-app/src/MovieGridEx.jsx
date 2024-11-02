import MovieCard from "./MovieCard";

function MovieGridEx({movies}){
    return (
        <>
            <h1>Movie List</h1>
            <div>
                {movies.map((movie, index) => (
                    <MovieCard
                     key={index} movie={movie} />
                ))}
            </div>
        </>
    );
    
}
export default  MovieGridEx;