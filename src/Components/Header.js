import { useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { SUPPORTED_LANG } from "../Utils/constants";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    // Toggle GPT search button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  }

  return (
    <div className="absolute z-10 w-full mt-6 flex flex-col md:flex-row justify-between">
      <img
        className="w-40 sm:ml-10 mx-auto"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="logo"
      />
      {user && (
        <div className="mx-5  flex justify-between">
          {showGptSearch && <select className="px-2 my-1 mx-3 rounded-lg bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANG.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="data-[focus]:bg-gray-800 data-[focus]:text-white"
              >
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="px-3 my-1 rounded-lg bg-purple-950 text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch? "Home" : "GPT Search"}
          </button>
          <UserDropDown />
        </div>
      )}
    </div>
  );
};

export default Header;
