import { useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";

const Header = () => {
  const user = useSelector((store) =>store.user);
  return (
    <div className="absolute z-10 w-screen mt-6 flex  justify-between">
      <img
        className="w-40 ml-28"
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
