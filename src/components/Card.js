import React, { useState } from "react";
import { mockDataSorted } from "../data/mockData";
import { flags } from "../data/flags";
import { numberImages } from "../data/numberImages";
import "../styles/cardStyle.css";

function Card() {
  const [drivers, setDrivers] = useState([...mockDataSorted]);

  function sortDrivers(lastName) {
    const driverIndex = [...drivers].findIndex(
      (driver) => driver.lastName === lastName
    );
    const newDrivers = [...drivers];
    newDrivers[driverIndex].points += 1;
    setDrivers([...newDrivers].sort((a, b) => b.points - a.points));
  }

  return drivers.map((driver, index) => {
    const { hex, image, number, points, firstName, lastName, team, country } =
      driver;
    return (
      <div key={index} className="driver-card">
        <div style={{ "--custom-color": hex }} className="custom-border"></div>
        <div className="points-section">
          <p>{index + 1}</p>
          <div className="points-container">
            <div className="points">
              <p>{points}</p>
              <p>PTS</p>
            </div>
            <button
              onClick={() => sortDrivers(lastName)}
              style={{ "--custom-color": hex }}
              className="add-points"
            >
              +
            </button>
          </div>
        </div>
        <div className="name-section">
          <div className="name">
            <p>{firstName}</p>
            <p className="lastName">{lastName}</p>
            <div style={{ background: hex }} className="name-border"></div>
          </div>
          <img src={flags.find((flag) => flag.country === country).url} />
        </div>
        <div className="team">{team}</div>
        <div className="driver-section">
          <img className="driver" src={image} />
          <img
            className="number"
            src={numberImages.find((image) => image.number === number).url}
          />
        </div>
      </div>
    );
  });
}

export default Card;
