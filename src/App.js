import React, { useEffect, useState } from "react";
import "./App.css";
import BottomRow from "./components/BottomRow";
import ScoreButton from "./components/ScoreButton";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [timeString, setTimeString] = useState("00:00");

  function handleScore(team, points) {
    if (team === "home") setHomeScore(homeScore + points);
    if (team === "away") setAwayScore(awayScore + points);
  }

  function getElapsedTime() {
    const dt = new Date(Date.now() - startTime);
    const pad = n => (n < 10 ? `0${n}` : n);
    return `${pad(dt.getUTCMinutes())}:${pad(dt.getUTCSeconds())}`;
  }

  useEffect(() => {
    setInterval(() => {
      setTimeString(getElapsedTime());
    }, 1000);
  });

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timeString}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <ScoreButton
          label="Home Touchdown"
          points={7}
          team="home"
          handleScore={handleScore}
        />
        <ScoreButton
          label="Home Field Goal"
          points={3}
          team="home"
          handleScore={handleScore}
        />
        <ScoreButton
          label="Away Touchdown"
          points={7}
          team="away"
          handleScore={handleScore}
        />
        <ScoreButton
          label="Away Field Goal"
          points={3}
          team="away"
          handleScore={handleScore}
        />
      </section>
    </div>
  );
}

export default App;
