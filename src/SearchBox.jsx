import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function searchBox() {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getweatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=matric`
    );
    let jsonResponse = response.json();
    console.log(jsonResponse);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    getweatherInfo();
    setCity("");
  };
  return (
    <div>
      <form className="SearchBox" onSubmit={handleSubmit}>
        <h3>Search the Wather</h3>
        <TextField
          id="City"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" onChange={handleChange}>
          Contained
        </Button>
      </form>
    </div>
  );
}
