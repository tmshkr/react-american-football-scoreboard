import React, { useState } from "react";

function ScoreButton(props) {
  const { label, points, handleScore, team } = props;
  return <button onClick={() => handleScore(team, points)}>{label}</button>;
}

export default ScoreButton;
