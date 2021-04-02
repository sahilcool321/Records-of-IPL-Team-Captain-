import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import PlayerData from "./PlayerData";
import "./index.css";

ReactDOM.render(
  <>
    <h1 className="heading_style">IPL 2021 team captains</h1>
    {PlayerData.map((val) => {
      return (
        <Card
          playerName={val.playerName}
          team={val.team}
          imgsrc={val.imgsrc}
          matches={val.matches}
          runs={val.runs}
          avg={val.avg}
          sr={val.sr}
          highest={val.highest}
          boundary={val.boundary}
          catch={val.catch}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
