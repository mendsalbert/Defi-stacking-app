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

    describe("Yiel farming deployement", async () => {
      it("rewards tokens for staking", async () => {
        let result;
        result = await tether.balanceOf(customer);
        assert.equal(
          result.toString(),
          tokens("100"),
          "customer balance before staking"
        );

        //check staking for customer of 100 tokens;
        await tether.approve(decentralBank.address, tokens("100"), {
          from: customer,
        });
        await decentralBank.depositeTokens(tokens("100"), { from: customer });

        //check balance of custoumer(updated);
        result = await tether.balanceOf(customer);
        assert.equal(result.toString(), tokens("0"));

        //check banace of decentral bank
        result = await tether.balanceOf(decentralBank.address);
        assert.equal(result.toString(), tokens("1000"));

        //is staking balance
        result = await decentralBank.isStaking(customer);
        assert.equal(result.toString(), "true", "customer is staking status");
      });
    });
  });
});
