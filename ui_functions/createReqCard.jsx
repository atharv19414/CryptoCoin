import React from "react";
import MCardRequest from "../ui_components/MCardRequest";

function createReqCard(requests, address, totalContributers) {
  let cardGroup = requests.map((request, index) => {
    if (!request.complete) {
      return (
        <div>
          <MCardRequest
            description={request.description}
            recipient={request.recipient}
            approve={request.totalPositives}
            disapprove={request.totalNegatives}
            amount={request.value}
            index={index}
            address={address}
            totalCon={totalContributers}
          />
        </div>
      );
    }
  });

  return cardGroup;
}

export default createReqCard;
