import React from "react";
import "./hemisphere.css";

const HemisphereDispay = props => {
  const hemisphere = getHemisphere(props.lat);
  const { text, iconName } = hemisphereConfig[hemisphere];
  return (
    <div className={`hemisphere-display ${hemisphere}`}>
      <i className={`icon-left massive angle double ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive angle double ${iconName} icon`} />
    </div>
  );
};

const hemisphereConfig = {
  south: {
    text: "You are in Southern Hemisphere",
    iconName: "down"
  },
  north: {
    text: "You are in Northern Hemisphere",
    iconName: "up"
  }
};

const getHemisphere = lat => {
  return lat > 0 ? "north" : "south";
};

export default HemisphereDispay;
