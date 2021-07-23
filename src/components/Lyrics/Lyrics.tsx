// @ts-ignore
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";

import Row from "react-bootstrap-v5/lib/Row";
import Col from "react-bootstrap-v5/lib/Col";
import Card from "react-bootstrap-v5/lib/Card";
import ListGroup from "react-bootstrap-v5/lib/ListGroup";

const BASE_URL =
  "https://addcors.herokuapp.com/http://api.musixmatch.com/ws/1.1";

function nl2br(text) {
  return text.replace(/(?:\r\n|\r|\n)/g, "<br />");
}


function LyricsText({text}) {
  return <span
  dangerouslySetInnerHTML={{
    __html: nl2br(text),
  }}
  ></span>;
}



const Lyrics = (props) => {
  const [track, setTrack] = useState<any>({});
  const [lyrics, setLyrics] = useState<any>({});

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        let lyrics = res.data.message.body.lyrics;
        setLyrics({ lyrics });

        return axios.get(
          `${BASE_URL}/track.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then((res) => {
        let track = res.data.message.body.track;
        setTrack({ track });
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <main className="mt-3">
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>

        <Row>
        <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                {" "}
                <strong>Album ID</strong>: {track.track.album_id}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <strong>Song Genre</strong>:{" "}
                {track.track.primary_genres.music_genre_list.length === 0
                  ? "NO GENRE AVAILABLE"
                  : track.track.primary_genres.music_genre_list[0].music_genre
                      .music_genre_name}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <strong>Explicit Words</strong>:{" "}
                {track.track.explicit === 0 ? "No" : "Yes"}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <strong>Release Date</strong>:{" "}
                <Moment format="MM/DD/YYYY">
                  {track.track.first_release_date}
                </Moment>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Header>
                <Card.Title>
                  {track.track.track_name} by{" "}
                  <span className="text-secondary">
                    {track.track.artist_name}
                  </span>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>                  
                  <LyricsText text={lyrics.lyrics.lyrics_body}/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </main>
    );
  }
};

export default Lyrics;
