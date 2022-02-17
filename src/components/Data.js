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
    <>
      <div className="flex flex-row justify-between mt-8 space-x-4  w-8/12">
        <div className="w-full rounded-md text-white py-8 bg-black flex flex-col items-center justify-center ">
          <LightningBoltIcon className="h-14" />
          <p className="text-2xl">Staking Tokens</p>
          <input
            class="bg-gray-900 p-7 text-2xl w-6/12 m-4 appearance-none border-2 border-gray-500 rounded  py-4 px-4 text-white leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-400"
            type="text"
            onFocus={true}
          />
          {/* <p className="text-7xl font-bold">0</p> */}
        </div>
        <div className="w-full rounded-md text-white bg-black flex flex-col items-center justify-center ">
          <CubeIcon className="h-14" />
          <p className="text-2xl">Balance</p>
          <p className="text-7xl font-bold">100</p>
        </div>
      </div>
      <div className=" space-y-4 flex w-8/12 text-center flex-col items-center justify-center mt-4">
        <div className="w-full text-white text-xl cursor-pointer bg-green-700 py-3 rounded-md">
          DEPOSITE
        </div>
        <div className="w-full text-white text-xl cursor-pointer bg-red-600 py-3 rounded-md">
          WITHDRAW
        </div>
      </div>
    </>
    //{" "}
    // </div>
  );
};

export default Data;
