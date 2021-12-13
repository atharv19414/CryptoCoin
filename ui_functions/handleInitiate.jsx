import instance from "../lib/instance"
import web3 from "../lib/web3";
import {Router} from "../next_route/next_routes"

async function handleInitiate({projectTitle, minContribution, requiredAmount}, updateError, updateShow){

    
    try{
        const accounts = await web3.eth.getAccounts();
        await instance.methods.createFundraiser(minContribution,projectTitle,requiredAmount).send({
            from: accounts[0]
        });

        Router.pushRoute("/discover");
    }catch(e){
        // setError(e.message);
        updateError(e.message);
        updateShow(true);
    }
    

}

export default handleInitiate;