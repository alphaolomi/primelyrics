import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Music as MusicIcon } from "react-feather";

import { Context } from "../../context";
import { StateType } from "../../context";

const BASE_URL =
  "https://addcors.herokuapp.com/http://api.musixmatch.com/ws/1.1";

const Search = () => {
  const [state, setState] = useContext<StateType>(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Search Results" });
      })
      .catch((err) => console.log(err));
  }, [trackTitle, setState]);

  const findTrack = (e) => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <MusicIcon size={48} /> Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-light btn-lg border  mb-4" type="submit">
            Get Track Lyrics
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
