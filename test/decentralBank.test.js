const { default: Web3 } = require("web3");

const DecentralBank = artifacts.require("DecentralBank");
const Reward = artifacts.require("RWD");
const Tether = artifacts.require("Tether");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("DecentralBank", (accounts) => {
  let tether, reward, decentralBank;

  function tokens(number) {
    return Web3.utils.toWei(number);
  }
  before(async () => {
    tether = await Tether.new();
    reward = await Reward.new();
    decentralBank = await DecentralBank.new(reward.address, tether.address);
    await reward.transfer(decentralBank.address, tokens("1000000"));
  });
  describe("Tether Deployement", async () => {
    it("matches name successfully", async () => {
      const name = await tether.name();
      assert.equal(name, "Mock tether Token");
    });
  });

  describe("Reward Deployement", async () => {
    it("matches name successfully", async () => {
      const name = await reward.name();
      assert.equal(name, "Reward");
    });
  });
});

// contract("DecentralBank", (accounts) => {

// });
