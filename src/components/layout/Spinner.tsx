import React from "react";
import Spinner from "react-bootstrap-v5/lib/Spinner";
import Row from "react-bootstrap-v5/lib/esm/Row";
export default () => {
  return (
    <Row>
      <div className="text-center">
        <Spinner animation="border" role="status" className=""  style={{width: 4 +'rem', height: 4+'rem'}}>        
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Row>
  );
};
