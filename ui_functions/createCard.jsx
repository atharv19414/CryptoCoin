import React from "react";
import MCard from "../ui_components/MCard";

function createCard(addresses, pTitles) {
  let cardGroup =  pTitles.map((value, index) => {
    const address = addresses[index];
    return (
      <div>
        <MCard ptitle={value} address={address}></MCard>
      </div>
    );
  });
  return cardGroup;
}

export default createCard;
