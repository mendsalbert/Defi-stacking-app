require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1:8545",
      port: "8545",
      network_id: "*", //connet to any network
    },
  },
  constracs_directory: "./src/contracts/",
  constracts_build_directory: "./src/truffle_abis",
  compilers: {
    solc: {
      version: "^0.5.0",
      optimizer: {
        enable: true,
        runs: 200,
      },
    },
  },
};
