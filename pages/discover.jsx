import React from "react";
import instance from "../lib/instance";
import createCard from "../ui_functions/createCard";
import MNavBar from "../ui_components/MNavBar";

class Discover extends React.Component {
  static async getInitialProps() {
    const fundraiser_addresses = await instance.methods
      .retriveCampaigns()
      .call();
    const fundraiser_names = await instance.methods.retrivepTitles().call();

    return { fundraiser_addresses, fundraiser_names };
  }

  render() {
    return (
      <div className="wrapper">
        <MNavBar />

        <div>
          <h2 class="h2-common">Current Projects</h2>
          <div className="card-gp">
            {createCard(
              this.props.fundraiser_addresses,
              this.props.fundraiser_names
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
