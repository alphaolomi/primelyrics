import React from "react";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

const Index = () => {
  return (
    <>
      <div className="mt-3">
      <Search />
      </div>
      <Tracks />
    </>
  );
};

export default Index;
