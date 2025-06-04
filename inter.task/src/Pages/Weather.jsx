
// import { useState,useEffect } from "react";
// const Weather=()=>{
//     const[location,setLocation]=useState("");
//     const[weather,setWeather]=useState({});
//     return(
//         <>
//           <div className="weatherinp">
//            Enter Location: <input type="text" value={location} 
//             onChange={(e)=>{setLocation(e.target.value)}} placeholder="EnterLocation" />
//           </div>
//         </>
//     )
// }
// export default Weather;

import  { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [location, setLocation] = useState('Delhi');
  const [weather, setWeather] = useState({});

  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
      />
      {weather.main && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
