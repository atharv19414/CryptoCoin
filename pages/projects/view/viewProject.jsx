import React from "react";
import MNavBar from "../../../ui_components/MNavBar";
import MDisplayList from "../../../ui_components/MDisplayList";
import FundRaiser from "../../../build/contracts/Fundraiser.json";
import web3 from "../../../lib/web3";
import { Link } from "../../../next_route/next_routes";
import MFormContribute from "../../../ui_components/MFormContribute";
import { Container, Row, Col, Button } from "react-bootstrap";

class ViewProject extends React.Component {
  static async getInitialProps(props) {
    const address = props.query.address;
    const fundRaiser = new web3.eth.Contract(FundRaiser.abi, address);

    const contractInfo = await fundRaiser.methods.getInfo().call();
    // console.log(contractInfo);
    return { contractInfo, address };
  }
  render() {
    return (
      <div className="wrapper">
        <MNavBar />
        <Container>
          <Row>
            <div className="m-list">
              <h3 className="projectDet">Project Details</h3>
              <MDisplayList
                title={this.props.contractInfo[0]}
                innAddress={this.props.contractInfo[1]}
                amountReq={this.props.contractInfo[5] + " wei"}
                amountGen={this.props.contractInfo[2] + " wei"}
                minCon={this.props.contractInfo[3] + " wei"}
                totalCon={this.props.contractInfo[4]}
                totalReq={this.props.contractInfo[6]}
                penReq={this.props.contractInfo[7]}
              />
            </div>
          </Row>
          <Row>
            <Col>
              <MFormContribute fundAddress={this.props.address} />
            </Col>
            <Col>
              <div className="view-requests">
                <h3>Already a Contributer?</h3>
                <Link route={`/projects/view/requests/${this.props.address}`}>
                  <a>
                    <Button variant="dark">Requests</Button>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewProject;
