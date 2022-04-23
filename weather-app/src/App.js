import React, { useEffect } from "react";
import "./App.css";
import weatherData from "./weatherData.json";

const App = () => {
  useEffect(() => {
    console.log(weatherData);
  }, []);

  return (
    <div className="Box">
      <h1>{weatherData.city.name}</h1>
      <span>Tuesday, April 15th</span>
      <br />
      <span>Overcast</span>
      <br />
      <p className="p">Precipitation: 100%<br />
         Humidity: 97%<br/>
         Wind: 4kph SW<br />
         Pollen Count: 36<br />
      </p>
      <div>
        <h4>Today Wednesday Thursday Friday Saturday Sunday Monday</h4>
      </div>
      <div>
        <p>rain moon moon sun rain rain moon</p>
      </div>
      <p>
        {weatherData.list.map((data) => (
          <>
            <span>{data.temp.min}</span>
            <span>{data.temp.max}</span>
          </>
        ))}
      </p>
      <p>Pollen 36</p>
    </div>
  );
};

export default App;
