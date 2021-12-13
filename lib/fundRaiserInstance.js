import web3 from "./web3";
import FundRaiser from "../build/contracts/Fundraiser.json"

function fundraiserInstance(address) {
    const fundRaiser = new web3.eth.Contract(
        FundRaiser.abi,
        address
    );

    return fundRaiser;
}

export default fundraiserInstance;