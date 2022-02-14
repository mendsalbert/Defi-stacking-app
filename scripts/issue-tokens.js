const DecentralBank = artifacts.require("DecentralBank");

module.exports = async function issueRewards(callback) {
  let decentralBank = await DecentralBank.deployed();
  await decentralBank.issueRewards();
  console.log("tokens deployed succ essfully");
  callback();
};
