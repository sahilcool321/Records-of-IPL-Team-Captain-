import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div class="hoverimg column">
            <div>
              <figure>
                <img src={props.imgsrc} className="card__img" />
              </figure>
            </div>
          </div>
          <div className="card__info">
            <div className="player__name">
              <h4>
                {props.playerName}
                <span>{props.team}</span>
              </h4>
            </div>
            <ul>
              <li>
                <span className="player__details">Matches :</span>
                {props.matches}
              </li>
              <li>
                <span className="player__details">Runs : </span>
                {props.runs}
              </li>
              <li>
                <span className="player__details">SR : </span>
                {props.sr}
              </li>
              <li>
                <span className="player__details">Avg : </span>
                {props.avg}
              </li>
              <li>
                <span className="player__details">Highest : </span>
                {props.highest}
              </li>
              <li>
                <span className="player__details">4/6: </span>
                {props.boundary}
              </li>
              <li>
                <span className="player__details">Catches : </span>
                {props.catch}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
