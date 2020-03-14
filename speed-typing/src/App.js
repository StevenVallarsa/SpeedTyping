import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const setRef = useRef(null);

  useEffect(() => {
    if (isPlaying && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isPlaying]);

  const handleChange = e => {
    if (isPlaying) {
      const { value } = e.target;
      setText(value);
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    setText("");
    setRef.current.disabled = false;
    setRef.current.focus();
  };

  const endGame = () => {
    setIsPlaying(false);
    setWords(text.trim().split(" ").length);
  };

  return (
    <div>
      <h1>Speed Typing</h1>
      <textarea
        ref={setRef}
        value={text}
        onChange={handleChange}
        disabled={!isPlaying}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isPlaying}>
        START
      </button>
      <h1>Words Typed: {words}</h1>
    </div>
  );
}

export default App;
