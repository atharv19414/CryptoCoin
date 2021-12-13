const HDWalletProvider = require("@truffle/hdwallet-provider");
// const provider = new HDWalletProvider(
//   "leisure spawn evoke valid repair gasp margin tattoo snack mushroom learn island",
//   "https://ropsten.infura.io/v3/09230c17557b4ce9a3e8759e7f354db0"
// );

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          "leisure spawn evoke valid repair gasp margin tattoo snack mushroom learn island",
          "https://ropsten.infura.io/v3/09230c17557b4ce9a3e8759e7f354db0"
        );
      },
      network_id: 3,
      gas: 4000000, //make sure this gas allocation isn't over 4M, which is the max
    },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.9", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
