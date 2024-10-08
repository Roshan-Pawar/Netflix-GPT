import { MOVIE_IMG_CDN } from "../Utils/constants";

const MovieCard = ({ moviePoster }) => {
  if (!moviePoster) return null;
  return (
    <div>
      <div className="md:w-40 w-36 mx-1">
        <img
          src={MOVIE_IMG_CDN + moviePoster}
          alt="MoviePoster"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default MovieCard;
