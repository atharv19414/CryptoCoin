import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "../next_route/next_routes";
import handleApprove from "../ui_functions/handleApprove";
import handleFinalize from "../ui_functions/handleFinalize";

function MCardRequest(props) {
  return (
    <div>
      <Card
        className="text-center"
        bg="light"
        style={{ width: "29.5rem", margin: "1rem  1.2rem",backgroundColor: "#66fcf1"}}
      >
        {/* <Card.Header>{props.description}</Card.Header> */}
        <Card.Body>
          <Card.Title>Description: {props.description}</Card.Title>
          <Card.Text>
            Recipient: {props.recipient}
            <br />
            Amount: {props.amount} <br />
            Approval Count: {props.approve}/{props.totalCon} <br />
            Disapproval Count: {props.disapprove}/{props.totalCon}
          </Card.Text>
          <Container>
            <Row>
              <Col>
                <Button
                  variant="success"
                  onClick={() => {
                    handleApprove(props.address, props.index, 1);
                  }}
                >
                  Approve
                </Button>
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleApprove(props.address, props.index, 2);
                  }}
                >
                  Disapprove
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="dark"
            onClick={() => {
              handleFinalize(props.address, props.index);
            }}
          >
            Finalize
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default MCardRequest;
