import React from "react";
import { Link } from "react-router-dom";
import { Play, Disc, ChevronRight } from "react-feather";

import Row from "react-bootstrap-v5/lib/Row";
import Col from "react-bootstrap-v5/lib/Col";
import Card from "react-bootstrap-v5/lib/Card";
import Button from "react-bootstrap-v5/lib/Button";
import Form from "react-bootstrap-v5/lib/Form";

const Track = ({ track }) => {
  return (
    <Col md={4}>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h5>{track.track_name}</h5>
          <p className="card-text">
            <strong>
              <Play /> Artist
            </strong>
            : {track.artist_name}
            <br />
            <strong>
              <Disc /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark text-center">
            <ChevronRight /> View Lyrics
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Track;
