import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="mb-5">
      <div className="WeatherForecast-day ">{day()}</div>{" "}
      <img src={props.data.condition.icon_url} />
      <div className="WeatherForecast-temperarure">
        <span className="temperature-max">{maxTemperature()}</span> /{" "}
        <span className="temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
