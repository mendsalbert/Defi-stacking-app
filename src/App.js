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
      setTether(tether);
      let tetherBalance = await tether.methods.balanceOf(account[0]).call();
      setTetherBalance(tetherBalance.toString());
      console.log(tetherBalance);
    } else {
      window.alert("tether contract not deployed");
    }
    const rewardData = await Reward.networks[networkId];
    if (reward) {
      const reward = new web3.eth.Contract(Reward.abi, rewardData.address);
      setReward(reward);
      let rewardBalance = await reward.methods.balanceOf(account[0]).call();
      setRewardBalance(rewardBalance.toString());
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
      setDecentralBank(decentralBank);
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

  // const stakeToken = (amount) => {
  //   tether.methods
  //     .approve(decentralBank._address, amount)
  //     .send({ from: accountNumber })
  //     .on("transactionHash", (hash) => {
  //       console.log(hash);
  //       decentralBank.methods
  //         .depositeTokens(amount)
  //         .send({ from: accountNumber })
  //         .on("transactionHash", (hash) => {
  //           setLoading(false);
  //         });
  //     });
  // };

  const stakeToken = (amount) => {
    // let ethAmount = Web3.utils.fromWei(amount, 'ether');
    // setLoading({ loading: true });
    // console.log(decentralBank._address);
    // console.log(amount);
    let ethAmount = Web3.utils.fromWei(amount, "ether");
    console.log(ethAmount);
    tether.methods
      .approve(decentralBank._address, amount)
      .send({ from: accountNumber })
      .on("transactionHash", (hash) => {
        decentralBank.methods
          .depositeTokens(amount)
          .send({ from: accountNumber })
          .on("transactionHash", (hash) => {
            setLoading({ loading: false });
          });
      });
  };
  const unStackeTokens = () => {
    setLoading(true);

    decentralBank.methods
      .unStackeTokens()
      .send({ from: accountNumber })
      .on("transactionHash", (hash) => {
        setLoading(false);
      });
  };

  if (!loading) {
    console.log("stakingbalance" + stakingBalance);
    console.log("rewardBalance" + rewardBalance);
    return (
      <Layout>
        <Navbar accountNumber={accountNumber} />
        <Summary
          stakingBalance={stakingBalance}
          rewardBalance={rewardBalance}
        />
        <Data
          tetherBalance={tetherBalance}
          stakeToken={stakeToken}
          unstakeToken={unStackeTokens}
        />
      </Layout>
    );
  } else {
    return (
      <div className="w-8/12  rounded-md mx-auto mt-20">
        <div className="animate-pulse flex flex-col items-center h-full justify-center space-x-5">
          <div class="w-10/12 mb-4 bg-gray-300 h-16 rounded-lg "></div>
          <div class="w-full bg-gray-300 h-20 rounded-lg mb-4"></div>
          <div className="w-full flex flex-row space-x-6">
            <div class="w-full bg-gray-300 h-60 rounded-lg "></div>
            <div class="w-full bg-gray-300 h-60 rounded-lg "></div>
          </div>
          <div class="w-full bg-gray-300 h-20 rounded-lg mt-4 mb-4"></div>
          <div class="w-full bg-gray-300 h-20 rounded-lg mb-4"></div>
        </div>
      </div>
    );
  }
};

export default App;
