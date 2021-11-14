import React from "react";
// import Spinner from "@/components/Spinner/Spinner";
import Track from "@/components/Tracks/Track";
import { NextPage } from "next";
import { useTracks } from "@/hooks";

const Tracks: NextPage = () => {
    const [trackList] = useTracks();

    if (trackList === undefined || trackList.length === 0) {
        return null;
    }

    return (
        <>
            <h3 className="text-center mb-4">Top 10 songs</h3>
            <div className="row">
                {trackList.map((item) => (
                    <Track key={item.track.track_id} track={item.track} />
                ))}
            </div>
        </>
    );
};

export default Tracks;
