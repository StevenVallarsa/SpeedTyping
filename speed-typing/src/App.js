import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setWords(text.trim().split(" ").length);
      setIsPlaying(false);
    }
  }, [timeRemaining, isPlaying]);

  const handleChange = e => {
    if (isPlaying) {
      const { value } = e.target;
      setText(value);
    }
  };

  return (
    <div>
      <h1>Speed Typing</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={setIsPlaying(true)}>START</button>
      <h1>Words Typed: {words}</h1>
    </div>
  );
}

export default App;
