import web3 from "../lib/web3";
import fundRaiser from "../lib/fundRaiserInstance"
import { Router } from "../next_route/next_routes";

async function handleContribute(contributedAmount, address, updateShow, updateError) {

    try{
        const myFundRaiser = fundRaiser(address);
        const accounts = await web3.eth.getAccounts();
        await myFundRaiser.methods.contribute().send({
            from: accounts[0],
            value: contributedAmount
       })

        Router.replaceRoute(`/projects/view/${address}`); 
    }catch(e){
        updateError(e.message);
        updateShow(true);
    }    
}

export default handleContribute;