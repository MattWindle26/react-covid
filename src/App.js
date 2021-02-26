import { useState, useEffect } from 'react';
import './App.css';
import CovidCountry from "./CovidCountry";

function App() {

  const [covidContries, setCovidCountries] = useState(null);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(res => {
      return res.json();
    })
    .then((data) => {
      setCovidCountries(data);
    })
    //Loads data from API as when the app starts
  }, []);

  return (
    <div className="country-grid">
      {covidContries && <CovidCountry covidContries={covidContries} /> }
      {!covidContries && "Loading..."}
    </div>
  );
}

export default App;
