import React from "react";
import { Link } from "react-router-dom";
import { Play, Disc, ChevronRight } from "react-feather";

const Track = ({ track }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <Play /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <Disc /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark">
            <ChevronRight /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
