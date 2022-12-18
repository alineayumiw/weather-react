import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      {" "}
      {Math.round(props.celsius)} <span className="unit">°C</span>
    </div>
  );
}
