import React from "react";
import bank from "../bankk.png";
import {
  IdentificationIcon,
  LibraryIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
const Navbar = ({ accountNumber }) => {
  return (
    <nav className="">
      <div className="flex flex-col items-center justify-center mt-3 mb-3">
        <LibraryIcon className="h-14" />
        <p className="text-2xl">DDAP Yeild Staking (Decentralize Banking)</p>
      </div>
      <div className="bg-white space-x-3 rounded-lg text-gray-600  p-4 shadow-lg flex justify-evenly items-center">
        <div>
          <IdentificationIcon className="h-10" />
        </div>
        <div>
          <p className="text-xl">{accountNumber}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
