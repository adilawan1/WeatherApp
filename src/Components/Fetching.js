import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import Weathertable from "./Weathertable";
import Grid from "@mui/material/Grid";
import "./Fetching.css";
const axios = require("axios").default;

export default function Fetching() {
  const [Weather, setWeather] = useState([]);
  const [City, setCity] = useState("n/a");

  useEffect(() => {
    setInterval(
      async () =>
        await axios
          .get(
            "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=1f31ff9326240108e994e7a40407de61"
          )
          .then(function (response) {
            // handle success
            setWeather(response.data.main);
            setCity(response.data.name);
            // console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          }),
      1000
    );
  }, []);
  // Make a request for a user with a given ID

  return (
    <div>
      <h1>Displaying the weather of {City}</h1>
      <Grid container sx={{ marginTop: 5 }}>
        <Grid item xs={12}>
          <Graph datg={Weather} sx={{ margin: 1 }} />
        </Grid>
        {/* <p>Feels like: {Weather.feels_like}</p>
      <p>humidity: {Weather.humidity}</p>
      <p>Pressure: {Weather.pressure}</p>
      <p>Temperature: {Weather.temp}</p>
      <p>Maximum temperature: {Weather.temp_max}</p>
      <p>Minimum temperature: {Weather.temp_min}</p> */}
        <Grid
          item
          xs={12}
          sx={{ color: "white", marginRight: 1, marginTop: 12, marginLeft: 1 }}
        >
          <Weathertable dat={Weather} nam={City} />
        </Grid>
      </Grid>
    </div>
  );
}
