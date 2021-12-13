import web3 from "./web3";
import Crowdfunding from "../build/contracts/Crowdfunding.json";

const specificInstance = new web3.eth.Contract(
    Crowdfunding.abi, "0x8aaAbB90792AfdF3C9418AC2E0C96e85BCd938B6"
)

export default specificInstance;