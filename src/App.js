import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Web3 from "web3";
import "./assets/main.css";
// import Tether from "../build/contracts/Tether.json";
import Tether from "./build/Tether.json";
import Reward from "./build/RWD.json";
import DecentralBank from "./build/DecentralBank.json";
import Layout from "./components/Layout";
import Summary from "./components/Summary";
import Data from "./components/Data";

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
    setAccoutNumber(account);

    const networkId = await web3.eth.net.getId();
    const tetherData = await Tether.networks[networkId];

    if (tetherData) {
      const tether = new web3.eth.Contract(Tether.abi, tetherData.address);
      setTether({ tether });
      let tetherBalance = await tether.methods.balanceOf(account[0]).call();
      setTetherBalance({ tetherBalance: tetherBalance.toString() });
      console.log(tetherBalance);
    } else {
      window.alert("tether contract not deployed");
    }
    const rewardData = await Reward.networks[networkId];
    if (reward) {
      const reward = new web3.eth.Contract(Reward.abi, rewardData.address);
      setReward({ reward });
      let rewardBalance = await reward.methods.balanceOf(account[0]).call();
      setRewardBalance({ rewardBalance: rewardBalance.toString() });
      console.log(rewardBalance);
    } else {
      window.alert("reward contract not deployed");
    }

    const decentralBankData = await DecentralBank.networks[networkId];
    if (decentralBank) {
      const decentralBank = new web3.eth.Contract(
        DecentralBank.abi,
        decentralBankData.address
      );
      setDecentralBank({ decentralBank });
      let stakingBalance = await decentralBank.methods
        .stakingBalance(account[0])
        .call();
      setStakingBalance(stakingBalance);
      console.log(stakingBalance);
    } else {
      window.alert("decentral bank not deployed");
    }

    setLoading(false);
  };

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const [accountNumber, setAccoutNumber] = useState("0x0");
  const [tether, setTether] = useState({});
  const [reward, setReward] = useState({});
  const [decentralBank, setDecentralBank] = useState({});
  const [tetherBalance, setTetherBalance] = useState(0);
  const [rewardBalance, setRewardBalance] = useState(0);
  const [stakingBalance, setStakingBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <Layout>
      <Navbar accountNumber={accountNumber} />
      <Summary />
      <Data />
    </Layout>
  );
};

export default App;
