import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG } from "../Utils/constants";

function GptSearch() {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img className="" src={BACKGROUND_IMG} alt="bg-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
