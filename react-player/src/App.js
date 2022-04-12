import React from "react";
//Adding Compoenents
import Song from "./components/Song";
import Player from "./components/Player"
//Import styles
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;