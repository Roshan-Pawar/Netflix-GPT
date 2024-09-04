import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
import { useRef } from "react";
import openai from "../Utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[35%] xl:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12 bg-black bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
          className="p-4 m-3 col-span-9 rounded-lg bg-slate-100"
        />
        <button
          className="py-2 px-4 m-3 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
