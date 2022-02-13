const DecentralBank = artifacts.require("DecentralBank");
const Reward = artifacts.require("RWD");
const Tether = artifacts.require("Tether");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("DecentralBank", ([owner, customer]) => {
  let tether, reward, decentralBank;

  function tokens(number) {
    return web3.utils.toWei(number, "ether");
  }
  before(async () => {
    tether = await Tether.new();
    reward = await Reward.new();
    decentralBank = await DecentralBank.new(reward.address, tether.address);
    await reward.transfer(decentralBank.address, tokens("1000000"));
    await tether.transfer(customer, tokens("100"), { from: owner });
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

  describe("DecentralBank Deployement", async () => {
    it("matches name successfully", async () => {
      const name = await decentralBank.name();
      assert.equal(name, "Decentral Bank");
    });

    it("contract has tokens", async () => {
      const balance = await reward.balanceOf(decentralBank.address);
      assert.equal(balance, tokens("1000000"));
    });
  });
});
