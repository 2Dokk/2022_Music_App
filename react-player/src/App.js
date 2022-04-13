import React,{useState} from "react";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
//styles
import "./styles/app.scss";
//Import Util
import data from "./util"

function App(){
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;