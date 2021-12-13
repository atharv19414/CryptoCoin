pragma solidity ^0.8.9;

contract Crowdfunding{
    
    uint public totalCampaigns = 0;
    address[] public campaigns;
    string[] public pTitles;

    function createFundraiser(uint minimumCon,string memory campaignName, uint reqamount) public{
        Fundraiser myCampaign = new Fundraiser(minimumCon,campaignName,reqamount, msg.sender);
        campaigns.push(address(myCampaign));
        pTitles.push(campaignName);
        totalCampaigns = totalCampaigns + 1;
    }
    
    function retriveCampaigns() public view returns(address[] memory){
        return campaigns;
    }

    function retrivepTitles() public view returns(string[] memory){
        return pTitles;
    }
}

contract Fundraiser{
    struct Request{
        address payable recipient;
        string description;
        bool complete;
        uint value;
        mapping(address => uint8) voters;
        uint totalPositives;
        uint totalNegatives;
    }
    
    
    address public innovator; 
    uint public minimumContribution;
    uint public totalContributers;
    string public projectTitle;
    uint public requiredAmount;
    mapping(address => uint8) public contributors;
    mapping(uint => Request) public requests;
    uint public requestsCounter;                   // total Requests
    uint public totalIncompleteRequests;

    constructor(uint minimumCon, string memory ptitle, uint reqamount, address innovatorAddress){
        minimumContribution = minimumCon;
        innovator = innovatorAddress;
        requestsCounter = 0;
        totalIncompleteRequests = 0;
        projectTitle = ptitle;
        requiredAmount = reqamount;

    }
    
    
    modifier isInnovator() {
        require(msg.sender == innovator);
        _;
    }
    
    modifier isContributer(){
        require(contributors[msg.sender] == 1);
        _;
    }

    function getVoters(uint requestNum, address voterAddress) public view returns(uint8){
        return requests[requestNum].voters[voterAddress];
    }
    
    function contribute() public payable{   // contribute
        require(msg.value >= minimumContribution);
        require(contributors[msg.sender] != 1);
        contributors[msg.sender] = 1;
        totalContributers++;
    }

    function getInfo() public view returns(string memory, address, uint, uint, uint, uint, uint, uint){
        return(
            projectTitle,
            innovator,
            address(this).balance,
            minimumContribution,
            totalContributers,
            requiredAmount,
            requestsCounter,
            totalIncompleteRequests
        );
    }
    
    // innovator/manager will use this function
    function createRequest(string memory description, uint value, address payable recipient) public isInnovator{
        require(totalIncompleteRequests < 10);
        
        Request storage newRequest = requests[requestsCounter++];
        newRequest.totalPositives = 0;
        newRequest.totalNegatives = 0;
        newRequest.description = description;
        newRequest.complete = false;
        newRequest.value = value;
        newRequest.recipient = recipient;
        // requestsCounter++;
        totalIncompleteRequests++;
    }
    
    // 1 => true 2 => false
    function voteRequest(uint index, uint8 vote) public isContributer{

        require(contributors[msg.sender] == 1);
        require(requests[index].voters[msg.sender] != 1 && requests[index].voters[msg.sender] != 2);
        
        requests[index].voters[msg.sender] = vote;
        if(vote == 1){
            requests[index].totalPositives++;
        }else if(vote == 2){
            requests[index].totalNegatives++;
        }
    }
    
    function confirmRequest(uint index) public payable isInnovator{
        require(requests[index].totalPositives >= (totalContributers/2));
        require(requests[index].complete == false);
        
        (bool sent,) = requests[index].recipient.call{value: requests[index].value}("");
        // requests[index].recipient.transfer(requests[index].value);
        
        require(sent, "Failed to send Ether");
        requests[index].complete = true;
        totalIncompleteRequests--;
    }

}