import movies from '../movies'

function MovieList(){
    return (
        <section id="movie-list-container">
            {movies.map(movie => (

         <div className="movie-card" key={movie.id}>
            <img className='movie-poster' 
            alt={movie.title}
            src={movie.posterURL}/>
            <h3 className='movie-title'>
                {movie.title}
            </h3>
         </div>
            ))}
        </section>
    )
}

export default MovieList;
