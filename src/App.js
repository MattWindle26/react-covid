import { useState, useEffect } from 'react';
import './css/App.css';
import CountryList from "./Components/CountryList";
import Nav from "./Components/Nav";
import GlobalStats from "./Components/GlobalStats";


function App() {

  const [covidContries, setCovidCountries] = useState(null);
  const [covidAll, setCovidAll] = useState(null);
  const [lastUpdate, setLastUpdate] = useState("");

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
      // all the data from the api
      setLastUpdate(timeDate(data.updated))
    })

    
    //Loads data from API as when the app starts
  }, []);


  const timeDate = (timestamp) => {
    var a = new Date(timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + hour + ':' + min;
    return time;
  }






  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard-content">
        <div className=" dashboard-block dashboard-nav">
          <p>last update: {lastUpdate} GMT</p>
        </div>
        <div className="dashboard-block all-results">
          <h2>Recent info (Country)</h2>
          <div className="results-table" id="style-3">
            <div className="single-row table-header">
              <p>Country</p>
              <p>Cases</p>
              <p>Deaths</p>
              <p>Recovered</p>
            </div>
            {covidContries && <CountryList covidContries={covidContries} />}
             {!covidContries && "Loading..."}
          </div>
        </div>

        <div className="dashboard-block global-stats">
          <h2>Global stats</h2>
          <p>These are that combined stats of all the countries affected by COVID 19.</p>
          {covidAll && <GlobalStats covidAll={covidAll} /> } 
          {!covidAll && "Loading..."}
        </div>       
       <div className="dashboard-block adaptive-data">
          <h2>Nothing yet</h2>
        </div>
        
      </div>
    </div>

  );
}

export default App;
