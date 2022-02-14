import React from "react";
import bank from "../bankk.png";
const Navbar = () => {
  return (
    <nav className="bg-black py-2 text-white">
      <div className="flex flex-row justify-between p-5">
        <div className="flex items-center ">
          <p className="text-2xl">DDAP Yield Staking (Decentralised Bank)</p>
          <img src={bank} width={85} />
        </div>
        <p className="text-lg">Account Number</p>
      </div>
    </nav>
  );
};

export default Navbar;
