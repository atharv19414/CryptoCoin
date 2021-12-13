import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "../next_route/next_routes";
function MCard(props) {
  return (
    <div className="mCard">
      <Card
        border="dark"
        style={{ width: "31.5rem", backgroundColor: "#59788e" }}
      >
        <Card.Header>
          <Card.Title>{props.ptitle}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.address}</Card.Title>
          <Link route={`/projects/view/${props.address}`}>
            <a>
              <Button variant="dark">View</Button>
            </a>
          </Link>
          <Link route={`/projects/create/requests/${props.address}`}>
            <a>
              <Button variant="dark" style={{ marginLeft: "1rem" }}>
                Create Request
              </Button>
            </a>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MCard;
