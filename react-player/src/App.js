import React from "react";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
//styles
import "./styles/app.scss";
//Import Util
import data from "./util"

function App(){
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;