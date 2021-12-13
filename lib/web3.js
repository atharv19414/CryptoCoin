import Web3 from "web3";

let web3;

let alreadyInjected = typeof window !== "undefined" && typeof window.ethereum !== "undefined";
let infuraRopsten = "https://ropsten.infura.io/v3/09230c17557b4ce9a3e8759e7f354db0"

if(alreadyInjected){
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
}else{
    const provider = new Web3.providers.HttpProvider(infuraRopsten);
    web3 = new Web3(provider);
}

export default web3;