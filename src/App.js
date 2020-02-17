import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreButton from "./components/ScoreButton";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  function handleScore(team, points) {
    if (team === "home") setHomeScore(homeScore + points);
    if (team === "away") setAwayScore(awayScore + points);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
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
        </div>
      </section>
    </div>
  );
}

export default App;
