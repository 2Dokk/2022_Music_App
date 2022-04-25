import React from "react";

const LibrarySong = ({ Song }) => {
  return (
    <div className="library-song">
      <img alt={Song.name} src={Song.cover}></img>
      <div className="song-description">
        <h3>{Song.name}</h3>
        <h4>{Song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
