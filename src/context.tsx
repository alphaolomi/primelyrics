import React, { useState, useEffect } from "react";

import axios from "axios";

export interface AppContextInterface {
  track_list: Array<any>;
  heading: string;
}

export interface AppContext {
  state: AppContextInterface;
  setState: React.Dispatch<React.SetStateAction<AppContextInterface>>;
}
let intialState: AppContextInterface = {
  track_list: [],
  heading: "",
};


export type StateType = [AppContextInterface, React.Dispatch<React.SetStateAction<AppContextInterface>>];

export const Context = React.createContext<
  | (
      | AppContextInterface
      | React.Dispatch<React.SetStateAction<AppContextInterface>>
    )[]
  |any
>(intialState);

///////////////////////////////////////

const ContextController = ({ children }) => {
  let intialState: AppContextInterface = {
    track_list: [],
    heading: "",
  };

  const [state, setState] = useState<AppContextInterface>(intialState);

  let apiUrl = process.env.REACT_APP_MM_API || "";
  apiUrl = `${apiUrl}?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`;
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setState({
          track_list: res.data.message.body.track_list,
          heading: "Top 10 Tracks",
        });
      })
      .catch((err) => console.log(err));
  }, [apiUrl]);
  
  
  let all:StateType = [state, setState] ;

  return (
    <Context.Provider value={all}>{children}</Context.Provider>
  );
};

export default ContextController;
