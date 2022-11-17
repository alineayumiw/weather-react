import React from "react";
import "./App.css";

export default function App() {
  let weatherData = {
    city: "Tokyo",
    temperature: 19,
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

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
                      <img src={weatherData.imgUrl} className="icon" />
                      <ul>
                        <li>
                          Wind: {weatherData.wind}{" "}
                          <span className="wind-speed"></span> m/s
                        </li>
                        <li>
                          Humidity: {weatherData.humidity}
                          <span className="humidity"></span>%
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title" id="city">
                          {weatherData.city}
                        </h5>
                        <div>
                          <strong
                            className="card-text"
                            id="temperature"
                          ></strong>
                          <span className="units">
                            <a href="#" id="c-link" className="active">
                              {weatherData.temperature}°C
                            </a>
                            |
                            <a href="#" id="f-link">
                              °F
                            </a>
                          </span>
                        </div>
                        <p id="description">{weatherData.description}</p>
                        <p id="hours"> Saturday 9:00am</p>
                        <p id="date">26/5/2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="navbar bg-light" id="form">
                <div className="container-fluid">
                  <form className="d-flex" role="search" id="search-form">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Select your city"
                      id="search-input"
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
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
