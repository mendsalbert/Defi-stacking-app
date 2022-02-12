// const RWD = artifacts.require("RWD");
const Tether = artifacts.require("Tether");
const RWD = artifacts.require("RWD");
const DecentralBank = artifacts.require("DecentralBank");

module.exports = async function(deployer) {
  //deploy thether contract
  await deployer.deploy(Tether);
  // const tether = await Tether.deployed();

  await deployer.deploy(RWD);
  // const rwd = await RWD.deployed();

  await deployer.deploy(DecentralBank);
  // const decentralBank = await DecentralBank.deployed();

  // await rwd.transfer(decentralBank.address, "10000000000000000000000");

  // await tether.transfer(accounts[1], "1000000000000000000");
};
