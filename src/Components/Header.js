import { useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";

const Header = () => {
  const user = useSelector((store) =>store.user);
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
  }, []);
  return (
    <div className="absolute z-10 w-screen mt-6 flex  justify-between">
      <img
        className="w-40 ml-10"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="logo"
      />
      {user && <div className="mr-10">
      <UserDropDown/>
      </div>}
    </div>
  );
};

export default Header;
