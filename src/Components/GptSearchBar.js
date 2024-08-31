import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants"

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 bg-black bg-opacity-80">
        <input
          type="text"
          placeholder={lang[langKey].searchPlaceholder }
          className="p-4 m-3 col-span-9 rounded-lg bg-slate-100"
        />
        <button className="py-2 px-4 m-3 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
