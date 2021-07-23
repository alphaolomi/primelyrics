import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import axios from "axios";

import Row from "react-bootstrap-v5/lib/Row";
import Col from "react-bootstrap-v5/lib/Col";

const Changelog = () => {
  
  const [md, setMd] = useState('')
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/alphaolomi/primelyrics/main/CHANGELOG.md"
      )
      .then((res) => {
        setMd(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mt-5" style={{ fontFamily: "monospace" }}>
      <Row>
        <Col md={12} lg={8}>
          <Row>            
            <ReactMarkdown plugins={[gfm]} children={md} />
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Changelog;
