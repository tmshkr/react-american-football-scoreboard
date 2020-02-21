import React, { memo } from "react";

function ScoreButton(props) {
  const { label, points, handleScore, team } = props;
  return <button onClick={() => handleScore(team, points)}>{label}</button>;
}

export default memo(ScoreButton);
