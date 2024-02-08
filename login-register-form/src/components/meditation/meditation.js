import { useState, useEffect } from 'react';
import Player from './components-med/Player';
import './meditation.css'
import React from 'react';

function Meditation() {
  const [songs, setSongs] = useState([
    {
      title: "White Noise",
      artist: "unknown",
      img_src: require("C:/Users/vismaya/Desktop/habit-tracker-final/login-register-form/src/song-1.jpg"),
      src:require("C:/Users/vismaya/Desktop/habit-tracker-final/login-register-form/src/white-noise-8117.mp3")
      //src: "./music/03-White-Noise-10min.mp3"
    },
    {
      title: "Wind",
      artist: "unknown",
      img_src: require("C:/Users/vismaya/Desktop/habit-tracker-final/login-register-form/src/song-2.png"),
      //src: "./music/26-Ocean-10min.mp3"
      src: require("C:/Users/vismaya/Desktop/habit-tracker-final/login-register-form/src/wind__artic__cold-6195.mp3")
    },
    {
      title: "Forest",
      artist: "unknown",
      img_src: require("C:/Users/vismaya/Desktop/habit-tracker-final/login-register-form/src/song-3.png"),
      src: require("C:/Users/vismaya/Desktop/habit-tracker-final/login-register-form/src/forest-3-26722.mp3")
      //src: "./music/42-Rain-10min.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <body className='meditation'>
    <div className="App-med">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
      <div className="wrapper-med">
        <form action="">
          <h1 className='med'>Track your sleep</h1>
          <div class="input-box-med">
            How much sleep did you get today? <input type="text" placeholder="Enter" />
          </div>
        </form>
      </div>
    </div>
    </body>
  );
}

export default Meditation;