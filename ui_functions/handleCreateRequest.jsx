import web3 from "../lib/web3";
import fundRaiser from "../lib/fundRaiserInstance";
import { Router } from "../next_route/next_routes";

async function handleCreateRequest(recipientAddress, amount, descreption, contractAddress, updateShow, updateError) {
    try{
        console.log(contractAddress);
        const myFundRaiser = fundRaiser(contractAddress);
        const accounts = await web3.eth.getAccounts();
        await myFundRaiser.methods.createRequest(descreption, amount, recipientAddress).send({
            from: accounts[0]
        })

        // Router.addRoute(`/projects/view/requests/${contractAddress}`);
    }catch(e){
        updateError(e.message);
        updateShow(true);
    }


}

export default handleCreateRequest;


