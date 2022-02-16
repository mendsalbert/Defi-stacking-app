import React from "react";
import bank from "../bankk.png";
import {
  CubeIcon,
  CurrencyDollarIcon,
  IdentificationIcon,
  LibraryIcon,
  LightningBoltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
const Data = () => {
  return (
    // <div className=" mt-12 w-8/12  rounded-lg text-gray-600 px-16 p-4  flex justify-between items-center">
    <div className="flex flex-row justify-between mt-8 space-x-4  w-8/12">
      <div className="w-full rounded-md text-white py-8 bg-black flex flex-col items-center justify-center ">
        <LightningBoltIcon className="h-14" />
        <p className="text-2xl">Staking Tokens</p>
        <p className="text-7xl font-bold">0</p>
      </div>
      <div className="w-full rounded-md text-white bg-black flex flex-col items-center justify-center ">
        <CubeIcon className="h-14" />
        <p className="text-2xl">Balance</p>
        <p className="text-7xl font-bold">100</p>
      </div>
    </div>
    // </div>
  );
};

export default Data;