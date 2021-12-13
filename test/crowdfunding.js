const Crowdfunding = artifacts.require("Crowdfunding");   // importing Crowdfunding contracts abstraction
const FundRaiser = artifacts.require("FundRaiser");       // importing FundRaiser contracts abstraction 
const Web3 = require("web3");                             // importing Web3  
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));     // creating web3 instance with Ganache GUI http provider

// Truffle uses the Mocha testing framework
contract("Crowdfunding", function (accounts) {         // test script start from here
  let crowdfunding;
  let fundraiserAddresses;
  let fundRaiser;

  before("", async () => {                             // this will run once before the it statement
    crowdfunding = await Crowdfunding.deployed();      // deploying the Crowdfunding(FundRaiser factory) to Ganache local blockchain (default from account 0).
    await crowdfunding.createFundraiser(               // using createFundraiser function of Crowdfunding contract to deploy FundRaiser 
      web3.utils.toWei("2", "ether"),                  // instance to Ganache
      "First Fundraiser",
      web3.utils.toWei("200", "ether"),                   
      { from: accounts[1] }                            // parameters: Using account1 to deploy(innovator's account)
    );
    fundraiserAddresses = await crowdfunding.retriveCampaigns();  
    fundRaiser = await FundRaiser.at(fundraiserAddresses[0]);
  });

  it("Successfull deployment of both contract", async function () {      // test checking Successfull deployment of both contract
    assert.ok(crowdfunding.address);
    assert.ok(fundRaiser.address);
  });

  it("should get total fundraiser Instances", async function () {        
    let totalCampaigns = await crowdfunding.totalCampaigns();
    assert.equal(totalCampaigns, fundraiserAddresses.length);
  });

  it("innovator's Address is set properly", async function () {         // checking if innovators address is set properly
    let innovatorAddress = await fundRaiser.innovator();
    assert.equal(
      innovatorAddress,
      "0xdfC63970a6391617C64Da12938F15CA1e1d26D46"
    );
  });

  it("check Fundraiser Name/ Project Title", async function () {
    let pTitle = await fundRaiser.projectTitle();
    assert.equal("First Fundraiser", pTitle);
  });

  it("Check Required Amount set by innovator", async function () {
    let reqAmount = await fundRaiser.requiredAmount();
    // console.log(reqAmount);
    assert.equal(web3.utils.toWei("200", "ether"), reqAmount);
  });

  it("Allows people to donate money", async () => {         // this test use 3rd account in Ganache blockChain
    await fundRaiser.contribute({                           // to contribte 10 eth to fundraiser
      from: accounts[2],
      value: web3.utils.toWei("10", "ether"),
    });
    assert.equal(                                          // verifying if our contract has recieved 10 ether sent by contributors account
      web3.utils.toWei("10", "ether"),
      await web3.eth.getBalance(fundRaiser.address)
    );
  });

  it("Check if contributors are mark correctly", async () => {         
    let isContributor = await fundRaiser.contributors(accounts[2]);
    assert.equal(true, isContributor);
  });

  it("requires a minimum amount to become a contributor", async () => {    // this test check if minimum contribution condition is working correctly
    try {
      await fundRaiser.contribute({
        from: accounts[2],
        value: web3.utils.toWei("2", "ether"),
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("allows innovator to create a request to spend money(ethers)", async function () {    // tests create request function
    await fundRaiser.createRequest(
      "Buy electronics components",
      web3.utils.toWei("4", "ether"),
      accounts[4],
      {from: accounts[1]}
    );
    let request = await fundRaiser.requests(0);
    assert.equal("Buy electronics components", request.description);
  });

  it("contributors can approve requests", async function(){        // tests voteRequest function
    await fundRaiser.voteRequest(0, 1,{from: accounts[2]});
    assert.equal(1, await fundRaiser.getVoters(0,accounts[2]));
  });

  it("innovator/manager can confirm request", async function(){    // test confirmRequest function
    await fundRaiser.confirmRequest(0, {from: accounts[1]});
    let balance = await web3.eth.getBalance(accounts[4]);
    assert.equal(104,web3.utils.fromWei(balance, "ether"));
  });
});



