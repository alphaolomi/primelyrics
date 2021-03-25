import React from "react";
import Row from "react-bootstrap-v5/lib/Row";
import Alert from "react-bootstrap-v5/lib/Alert";
const AlertDialog = ({ variant, message }) => {
  return (
    <Row>
      <Alert variant={variant} className="p-4">
      <Alert.Heading>

        <h6 className="display-6">{message}</h6>
      </Alert.Heading>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    </Row>
  );
};

export default AlertDialog;
