import React from "react";

const LibrarySong = ({ Song }) => {
  return (
    <div className="library-Song">
      <img alt={Song.name} src={Song.cover}></img>
      <h3>{Song.name}</h3>
      <h4>{Song.artist}</h4>
    </div>
  );
};

export default LibrarySong;