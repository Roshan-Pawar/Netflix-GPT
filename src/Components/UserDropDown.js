/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
  NewspaperIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { USER_IMG } from "../Utils/constants";

const UserDropDown = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white">
          <img src={USER_IMG} alt="userIcon" className="w-8" />
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-8 w-8 text-white"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className=" flex px-4 py-2 text-sm text-white data-[focus]:bg-gray-800 data-[focus]:text-white"
            >
              <UserCircleIcon className="size-5 mr-1" /> Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="flex px-4 py-2 text-sm text-white data-[focus]:bg-gray-800 data-[focus]:text-white"
            >
              <InformationCircleIcon className="size-5 mr-1" />
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="flex px-4 py-2 text-sm text-white data-[focus]:bg-gray-800 data-[focus]:text-white"
            >
              <NewspaperIcon className="size-5 mr-1" /> License
            </a>
          </MenuItem>

          <MenuItem>
            <button
              onClick={handleSignOut}
              type="submit"
              className="flex w-full px-4 py-2 text-left text-sm text-white data-[focus]:bg-gray-800 data-[focus]:text-white"
            >
              <ArrowRightStartOnRectangleIcon className="size-5 mr-1" /> Sign
              out
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default UserDropDown;
