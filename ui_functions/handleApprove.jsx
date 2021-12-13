import web3 from "../lib/web3";
import fundRaiser from "../lib/fundRaiserInstance"
import { Router } from "../next_route/next_routes";

async function handleApprove(address, index, vote){
    try{
        const myFundRaiser = fundRaiser(address);
        const accounts = await web3.eth.getAccounts();

        await myFundRaiser.methods.voteRequest(index, vote).send({
            from: accounts[0]
        });

        Router.replaceRoute(`/projects/view/requests/${address}`);
    }catch(e){

    }

}

export default handleApprove;