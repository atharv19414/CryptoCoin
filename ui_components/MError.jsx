import React from "react";
import { Alert } from "react-bootstrap";

function MError(props) {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{props.msg}</p>
    </Alert>
  );
}

export default MError;