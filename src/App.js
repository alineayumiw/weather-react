import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { propTypes } from "react-bootstrap/esm/Image";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Tokyo");
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "423fc825af3a486561521bdd3136568e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
                        <WeatherIcon className="icon" code={weatherData.icon} />
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
                          <div id="date"></div>
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
                      <button
                        className="btn btn-outline-primary"
                        type="submit"
                        id="current-position"
                      >
                        Current
                      </button>
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div>{" "}
        </div>

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
    );
  } else {
    search();
    return "Loading..";
  }
}
