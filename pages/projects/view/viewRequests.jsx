import React from "react";
import MNavBar from "../../../ui_components/MNavBar";
import { Button } from "react-bootstrap";
import { Link } from "../../../next_route/next_routes";
import fundraiserInstance from "../../../lib/fundRaiserInstance";
import getAllRequests from "../../../eth_js_functions/getAllRequests";
import createReqCard from "../../../ui_functions/createReqCard";

class ViewRequests extends React.Component {
  static async getInitialProps(props) {
    const address = props.query.address;
    const fundRaiser = fundraiserInstance(address);

    const { requestArray, totalRequests, totalIncompleteReq } =
      await getAllRequests(fundRaiser);

    const totalContributers = await fundRaiser.methods.totalContributers().call();
    console.log(requestArray);

    return { address, totalRequests, totalIncompleteReq, requestArray, totalContributers };
  }

  render() {
    return (
      <div className="wrapper">
        <MNavBar />
        <div style={{display: "table", margin: "1rem auto"}}>
          <Link route={`/projects/create/requests/${this.props.address}`}>
            <a>
              <Button variant="dark">Create Request</Button>
            </a>
          </Link>
        </div>

        <h3  style={{display: "table", margin: "1rem auto"}}>Pending Requests</h3>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {createReqCard(this.props.requestArray, this.props.address, this.props.totalContributers)}
        </div>

        
      </div>
    );
  }
}

export default ViewRequests;
