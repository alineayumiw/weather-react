import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Tokyo");
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function search() {
    const apiKey = "133a3ft3fab6094b0b7471o16009a6a4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app">
            <div className="row">
              <div className="col-4">
                <div className="cardstyle">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="icon">
                          <img src={weatherData.icon} />
                        </div>
                        <ul>
                          <li>
                            <span className="wind-speed">
                              {" "}
                              Wind: {Math.round(weatherData.wind)}
                            </span>{" "}
                            m/s
                          </li>
                          <li>
                            <span className="humidity">
                              Humidity: {weatherData.humidity}
                            </span>
                            %
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title" id="city">
                            {weatherData.city}
                          </h5>

                          <div>
                            <strong className="card-text" id="temperature">
                              {" "}
                              <WeatherTemperature
                                celsius={weatherData.temperature}
                              />
                            </strong>
                          </div>
                          <p id="description" className="text-capitalize">
                            {weatherData.description}
                          </p>
                          <p id="hours"> </p>
                          <div id="date">
                            <FormattedDate date={weatherData.date} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <nav className="navbar bg-light" id="form">
                  <div className="container-fluid">
                    <form
                      className="d-flex"
                      role="search"
                      id="search-form"
                      onSubmit={handleSubmit}
                    >
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Select your city"
                        id="search-input"
                        onChange={handleCityChange}
                      />

                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </nav>
              </div>{" "}
              <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
          </div>{" "}
          <p className="source">
            <a
              href="https://github.com/alineayumiw/weather-react"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by Aline Watanabe
          </p>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
