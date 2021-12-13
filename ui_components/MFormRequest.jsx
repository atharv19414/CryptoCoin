import React from "react";
import { Form, Button } from "react-bootstrap";
import MError from "./MError";
import handleCreateRequest from "../ui_functions/handleCreateRequest";

class MFormRequest extends React.Component {
  state = {
    recipient: "",
    Tvalue: "",
    descreption: "",
    err: "",
    show: false,
  };

  handleRecepient = (e) => this.setState({ recipient: e.target.value });
  handleValue = (e) => this.setState({ Tvalue: e.target.value });
  handleDesc = (e) => this.setState({ descreption: e.target.value });
  updateError = (e) => {
    this.setState({ err: e });
  };
  updateShow = (e) => {
    this.setState({ show: true });
  };
  render() {
    return (
      <div>
        <Form className="m-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Recipient</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address of Recepient (hex)"
              value={this.state.recipient}
              onChange={this.handleRecepient}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Value</Form.Label>
            <Form.Control
              type="text"
              placeholder="Total Amount (wei)"
              value={this.state.Tvalue}
              onChange={this.handleValue}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Reason for spending"
              value={this.state.descreption}
              onChange={this.handleDesc}
            />
          </Form.Group>
          <Button
            variant="dark"
            type="button"
            onClick={() => {
              handleCreateRequest(
                this.state.recipient,
                this.state.Tvalue,
                this.state.descreption,
                this.props.fundAddress,
                this.updateShow,
                this.updateError
              );
            }}
          >
            Create
          </Button>
          {this.state.show && <MError msg={this.state.err} />}
        </Form>
      </div>
    );
  }
}

export default MFormRequest;
