// var FundRaiser = artifacts.require("FundRaiser");
var Crowdfunding = artifacts.require("Crowdfunding");

module.exports = async function(deployer){
    await deployer.deploy(Crowdfunding);
};

// deployed contract address (ropsten): 0x100619Fd1CA216784425fd98252D20fA83075493
// new Address: 0xf63F89337D94813622819CfF30f5106fda13C09b
// latest Address: 0x71FDf73855284806747c424A7b10ceEA27D82783
// lllatest address: 0xfe26802042ecDFdD4201224622f3EfF14C8abd15
// llllllllatest address: 0xcAe16Bc1778416c325012E3053D7D531422DbC55
// llllllllllllllatest address: 0x39b1a1F1D67292cD377239c69eDCC6A17f3b083e

// new latest address: 0x8aaAbB90792AfdF3C9418AC2E0C96e85BCd938B6