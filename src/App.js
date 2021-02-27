import { useState, useEffect } from 'react';
import './css/App.css';
import CovidCountry from "./Components/CovidCountry";
import Nav from "./Components/Nav";
import GlobalStats from "./Components/GlobalStats";


function App() {

  const [covidContries, setCovidCountries] = useState(null);
  const [covidAll, setCovidAll] = useState(null);

  useEffect(() => {

    fetch("https://disease.sh/v3/covid-19/countries")
    .then(res => {
      return res.json();
    })
    .then((data) => {
      setCovidCountries(data);
    });    
    
    fetch("https://disease.sh/v3/covid-19/all")
    .then(res => {
      return res.json();
    })
    .then((data) => {
      setCovidAll([data]);
    })

    //Loads data from API as when the app starts
  }, []);

  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard-content">

        <div className="dashboard-block all-results">
          <h2>Recent info</h2>
          <div className="results-table" id="style-3">
            <div className="single-row table-header">
              <p>Country</p>
              <p>Cases</p>
              <p>Deaths</p>
              <p>Recovered</p>
            </div>
            {covidContries && <CovidCountry covidContries={covidContries} />}
             {!covidContries && "Loading..."}
          </div>
        </div>

        <div className="dashboard-block">
          <h2>Global stats</h2>
          {covidAll && <GlobalStats covidAll={covidAll} /> } 
          {!covidAll && "Loading..."}
        </div>       
       <div className="dashboard-block">
          <h2>Global stats</h2>
        </div>
        
      </div>
    </div>

  );
}

export default App;
