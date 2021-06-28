import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Music as MusicIcon } from "react-feather";

import Row from "react-bootstrap-v5/lib/Row";
import Col from "react-bootstrap-v5/lib/Col";
import Card from "react-bootstrap-v5/lib/Card";
import Button from "react-bootstrap-v5/lib/Button";
import Form from "react-bootstrap-v5/lib/Form";
import Spinner from "../layout/Spinner";


import { Context } from "../../context";
import { StateType } from "../../context";

const BASE_URL =
  "https://addcors.herokuapp.com/http://api.musixmatch.com/ws/1.1";

const Search = () => {
  const [state, setState] = useContext<StateType>(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");
  const [loadNow,setLoadNow] = useState(false)

  useEffect(() => {
    if(trackTitle.length > 0 ){
      axios
      .get(
        `${BASE_URL}/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Search Results" });
        setLoadNow(false)
      })
      .catch((err) => {alert(err);console.log(err)});
    }
  }, [trackTitle, setState]);

  const findTrack = (e) => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (<>
    <Card className="mb-4 p-4">
      <Card.Body>
        <Card.Title>
          {" "}
          <h1 className="display-4 text-center">
            <MusicIcon size={48} /> Search For A Song
          </h1>
        </Card.Title>
        <Card.Text>
          <p className="lead text-center">Get the lyrics for any song</p>
          <Form onSubmit={findTrack}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="userInput"
                value={userInput}
                onChange={onChange}
                placeholder="Song title..."
              />
            </Form.Group>

            <div className="d-grid gap-2 mt-3">
              <Button variant="secondary" type="submit" size="lg" onClick={()=>setLoadNow(true)}>
                Get Track Lyrics
              </Button>
            </div>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
    {loadNow && <Spinner />}
    </>
  );
};

export default Search;
