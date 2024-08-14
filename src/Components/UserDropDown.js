import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, UserCircleIcon, ArrowRightStartOnRectangleIcon, NewspaperIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserDropDown = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
          });
    }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <img
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="userIcon"
            className="w-8"
          />
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-8 w-8 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className=" flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
             < UserCircleIcon className="size-5 mr-1"/> Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <InformationCircleIcon className="size-5 mr-1"/>Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
             <NewspaperIcon className="size-5 mr-1"/> License
            </a>
          </MenuItem>
          
            <MenuItem>
              <button
                onClick={handleSignOut}
                type="submit"
                className="flex w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
               <ArrowRightStartOnRectangleIcon className="size-5 mr-1"/> Sign out
              </button>
            </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>
  );
};

export default UserDropDown;
