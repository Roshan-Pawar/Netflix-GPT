import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="m-5">
        <h1 className="md:text-2xl text-3xl font-light py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hidden">
          {movies && movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} moviePoster={movie.poster_path} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
