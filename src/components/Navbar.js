import React from "react";
import bank from "../bankk.png";
const Navbar = ({ accountNumber }) => {
  return (
    <nav className="bg-black text-white">
      <div className="flex flex-row items-center py-3 justify-between ">
        <div className="flex items-center ">
          <p className="text-lg">DDAP Yield Staking (Decentralised Bank)</p>
          <img src={bank} width={85} />
        </div>
        <p className="text-lg">ACCOUNT NUMBER : {accountNumber}</p>
      </div>
    </nav>
  );
};

export default Navbar;
