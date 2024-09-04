import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG } from "../Utils/constants";

function GptSearch() {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover sm:w-screen"
          src={BACKGROUND_IMG}
          alt="bg-img"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch;
