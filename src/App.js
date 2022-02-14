import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
// import Button from "react-bootstrap/Button";
import web3 from "web3";
import Web3 from "web3";
useEffect(() => {
  loadWeb3();
}, []);

const loadWeb3 = async () => {
  if (window.ethereuem) {
    window.web3 = new Web3(window.ethereuem);
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert("no ethereum browser detected");
  }
};

const App = () => {
  const [accountNumber, setAccoutNumber] = useState("0x0");
  return (
    <div>
      <Navbar accountNumber={accountNumber} />
    </div>
  );
};

export default App;
