import React from "react";
import { Form, Button } from "react-bootstrap";
import handleContribute from "../ui_functions/handleContribute";
import MError from "./MError";

class MContributeForm extends React.Component {
  state = {
    contributedAmount: "",
    show: false,
    err: "",
  };

  handleContributedAmount = (e) =>
    this.setState({ contributedAmount: e.target.value });

  updateShow = (e) => {
    this.setState({ show: true });
  };

  updateError = (e) => {
    this.setState({ err: e });
  };

  render() {
    return (
      <div className="contributeForm">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <h3>Want to contribute to this project?</h3>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Amount (wei)"
              value={this.state.contributedAmount}
              onChange={this.handleContributedAmount}
            />
          </Form.Group>
          <Button
            className="contributeButton"
            variant="dark"
            type="button"
            onClick={() => {
              handleContribute(
                this.state.contributedAmount,
                this.props.fundAddress,
                this.updateShow,
                this.updateError
              );
            }}
          >
            Contribute
          </Button>
          {this.state.show && <MError msg={this.state.err} />}
        </Form>
      </div>
    );
  }
}

export default MContributeForm;
