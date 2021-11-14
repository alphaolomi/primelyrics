import React from "react";
import Link from "next/link";
import { Play, Disc, ChevronRight } from "react-feather";

// import Row from "react-bootstrap-v5/lib/Row";
import Col from "react-bootstrap-v5/lib/Col";
import Card from "react-bootstrap-v5/lib/Card";
import { TrackItem } from "@/interfaces";
// import Button from "react-bootstrap-v5/lib/Button";
// import Form from "react-bootstrap-v5/lib/Form";

interface TrackProps {
    track: TrackItem;
}

const Track: React.FC<TrackProps> = ({ track }) => {
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
                    <Link href={`lyrics/track/${track.track_id}`}>
                        <a className="btn btn-dark text-center">
                            <ChevronRight /> View Lyrics
                        </a>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Track;
