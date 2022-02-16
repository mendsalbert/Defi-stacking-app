import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Web3 from "web3";

const App = () => {
  const loadWeb3 = async () => {
    if (window.ethereuem) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereuem.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("no ethereum browser detected");
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const account = await web3.eth.getAccounts();
    console.log(account);
  };
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const [accountNumber, setAccoutNumber] = useState("0x0");
  return (
    <div>
      <Navbar accountNumber={accountNumber} />
    </div>
  );
};

export default App;
