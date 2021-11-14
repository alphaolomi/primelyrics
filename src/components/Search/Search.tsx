import React, { useState } from "react";
// import axios from "axios";
import { Music as MusicIcon } from "react-feather";

// import Row from "react-bootstrap-v5/lib/Row";
// import Col from "react-bootstrap-v5/lib/Col";
import Card from "react-bootstrap-v5/lib/Card";
import Button from "react-bootstrap-v5/lib/Button";
import Form from "react-bootstrap-v5/lib/Form";
import Spinner from "../Spinner/Spinner";
// import Spinner from "@/components/Spinner/Spinner";

// const BASE_URL =
// "https://addcors.herokuapp.com/http://api.musixmatch.com/ws/1.1";

const Search: React.FC = () => {
    // const [state, setState] = useContext<StateType>(Context);
    const [userInput, setUserInput] = useState("");
    const [trackTitle, setTrackTitle] = useState("");
    const [loadNow, setLoadNow] = useState(false);

    // useEffect(() => {
    //     if (trackTitle.length > 0) {
    //         axios
    //             .get(
    //                 `${BASE_URL}/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`,
    //             )
    //             .then((res) => {
    //                 let track_list = res.data.message.body.track_list;
    //                 setState({
    //                     track_list: track_list,
    //                     heading: "Search Results",
    //                 });
    //                 setLoadNow(false);
    //             })
    //             .catch((err) => {
    //                 alert(err);
    //                 console.log(err);
    //             });
    //     }
    // }, [trackTitle, setState]);

    return (
        <>
            <Card className="mb-4 p-4">
                <Card.Body>
                    <Card.Title>
                        {" "}
                        <h1 className="display-4 text-center">
                            <MusicIcon size={48} /> Search For A Song
                        </h1>
                    </Card.Title>
                    <Card.Text>
                        <p className="lead text-center">
                            Get the lyrics for any song
                        </p>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setTrackTitle(userInput.trim());
                                setLoadNow(true);
                            }}
                        >
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    type="text"
                                    name="userInput"
                                    value={userInput}
                                    onChange={(e) => {
                                        setUserInput(e.target.value);
                                    }}
                                    autoComplete="off"
                                    placeholder="Song title..."
                                />
                            </Form.Group>

                            <div className="d-grid gap-2 mt-3">
                                <Button
                                    variant="secondary"
                                    type="submit"
                                    size="lg"
                                >
                                    Get Track Lyrics
                                </Button>
                            </div>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            {trackTitle && loadNow && <Spinner />}
        </>
    );
};

export default Search;
