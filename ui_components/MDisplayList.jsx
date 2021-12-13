import React from "react";
import { ListGroup } from "react-bootstrap";
function MDisplayList(props) {
  return (
    <div className="m-list">
      <ListGroup horizontal = "md">
        <ListGroup.Item className="lgroupItem-k">Project Title</ListGroup.Item>
        <ListGroup.Item className="lgroupItem-v">{props.title}</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal = "md">
        <ListGroup.Item className="lgroupItem-k">Creator/Innovator Address</ListGroup.Item>
        <ListGroup.Item className="lgroupItem-v">{props.innAddress}</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal = "md">
        <ListGroup.Item className="lgroupItem-k">Required Amount</ListGroup.Item>
        <ListGroup.Item className="lgroupItem-v">{props.amountReq}</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal = "md">
        <ListGroup.Item className="lgroupItem-k">Amount Generated</ListGroup.Item>
        <ListGroup.Item className="lgroupItem-v">{props.amountGen}</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal = "md">
        <ListGroup.Item className="lgroupItem-k">Minimum Contribution</ListGroup.Item>
        <ListGroup.Item className="lgroupItem-v">{props.minCon}</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal = "md">
        <ListGroup.Item className="lgroupItem-k">Total Contributers</ListGroup.Item>
        <ListGroup.Item className="lgroupItem-v">{props.totalCon}</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal = "md">
        <ListGroup.Item className="lgroupItem-k">Total Requests</ListGroup.Item>
        <ListGroup.Item className="lgroupItem-v">{props.totalReq}</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal = "md">
        <ListGroup.Item className="lgroupItem-k">Total Pending Requests</ListGroup.Item>
        <ListGroup.Item className="lgroupItem-v">{props.penReq}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default MDisplayList;
