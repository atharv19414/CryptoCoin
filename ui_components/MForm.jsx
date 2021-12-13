import React from "react";
import { Form, Button } from "react-bootstrap";
import handleInitiate from "../ui_functions/handleInitiate";
import MError from "./MError";

class MForm extends React.Component {
  state = {
    projectTitle: "",
    minContribution: "",
    requiredAmount: "",
    err: "",
    show: false,
  };

  handleProjectTitle = (e) => this.setState({ projectTitle: e.target.value });
  handleMinContribution = (e) =>
    this.setState({ minContribution: e.target.value });
  handleRequiredAmount = (e) =>
    this.setState({ requiredAmount: e.target.value });

  updateError = (e) => {
    this.setState({ err: e });
  };
  updateShow = (e) => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="m-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type="text"

              
              placeholder="Project Title"
              value={this.state.projectTitle}
              onChange={this.handleProjectTitle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMin">
            <Form.Label>Minimum Amount of Contribution</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Amount in Wei"
              value={this.state.minContribution}
              onChange={this.handleMinContribution}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicReq">
            <Form.Label>Total Required Amount (in Wei)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Amount in Wei"
              value={this.state.requiredAmount}
              onChange={this.handleRequiredAmount}
            />
          </Form.Group>

          <Button
            variant="dark"
            type="button"
            onClick={() => {
              const { projectTitle, minContribution, requiredAmount } =
                this.state;
              handleInitiate(
                { projectTitle, minContribution, requiredAmount },
                this.updateError,
                this.updateShow
              );
            }}
          >
            Initiate
          </Button>
          {this.state.show && <MError msg={this.state.err} />}
        </Form>{" "}
      </div>
    );
  }
}

export default MForm;
