import React from "react";
import bank from "../bankk.png";
import {
  CurrencyDollarIcon,
  IdentificationIcon,
  LibraryIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
const Summary = () => {
  return (
    <div className="bg-white mt-12 w-8/12  rounded-lg text-gray-600 px-16 p-4 shadow-xl flex justify-between items-center">
      <div className="flex flex-col items-center justify-center ">
        <CurrencyDollarIcon className="h-10" />
        <p className="text-xl">Staking Balance</p>
        <p className="text-2xl font-bold">0 USDT</p>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <CurrencyDollarIcon className="h-10" />
        <p className="text-xl">Reward Balance</p>
        <p className="text-2xl font-bold">0 RWD</p>
      </div>
    </div>
  );
};

export default Summary;
