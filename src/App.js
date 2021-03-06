import { useState, useEffect } from 'react';
import './css/App.css';
import CountryList from "./Components/CountryList";
import Nav from "./Components/Nav";
import GlobalStats from "./Components/GlobalStats";


function App() {

  const [covidContries, setCovidCountries] = useState(null);
  const [covidAll, setCovidAll] = useState(null);
  const [lastUpdate, setLastUpdate] = useState("");
  const [singleCountryData, setsingleCountryData] = useState(null);

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
      console.log(data.updated);
      setLastUpdate(timeDate(data.updated))
    })

    
    //Loads data from API as when the app starts
  }, []);


  const timeDate = (timestamp) => {
    console.log(timestamp);
    var a = new Date(timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
  }


  const fetchCountryData = (url) =>{
    setsingleCountryData();
    fetch("https://disease.sh/v3/covid-19/countries/" + url )
      .then(res => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setsingleCountryData(data);
      });
    return;
  }

  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard-content">
        <div className=" dashboard-block dashboard-nav">
          <p>Data correct at: {lastUpdate} GMT</p>
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
            {covidContries && covidAll && 
            <CountryList 
            covidContries={covidContries}
            fetchCountryData={fetchCountryData}
             />}
            {!covidContries && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
          </div>
        </div>

        <div className="dashboard-block global-stats">
          <h2>Global stats</h2>
          <p>These are that combined stats of all the countries affected by COVID 19.</p>
          {covidAll && <GlobalStats covidAll={covidAll} /> } 
          {!covidAll && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
        </div>       
       <div className="dashboard-block adaptive-data">
          {!singleCountryData && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
          {singleCountryData &&
          <>
            <h2 className="countryNameFlag"><img className="flag" src={singleCountryData.countryInfo.flag} alt="" /> {singleCountryData.country}</h2>
            
            <div className="single-country-data">
              <div>
                <p>Cases </p>
                <p>Todays cases</p>
                <p>Total deaths</p>
                <p>Todays deaths</p>
                <p>Recovered</p>
                <p>Todays Recovered</p>
                <p>Active cases</p>
                <p>Critical cases</p>
                <p>Cases per one million</p>
                <p>Population</p>
                <p>Active per one million</p>
                <p>Recovered per one million</p>
                <p>Critical per one million</p>
              </div>              
              <div>
                <p>{singleCountryData.cases}</p>
                <p>{singleCountryData.todayCases}</p>
                <p>{singleCountryData.deaths}</p>
                <p>{singleCountryData.todayDeaths}</p>
                <p>{singleCountryData.recovered}</p>
                <p>{singleCountryData.todayRecovered}</p>
                <p>{singleCountryData.active}</p>
                <p>{singleCountryData.critical}</p>
                <p>{singleCountryData.casesPerOneMillion}</p>
                <p>{singleCountryData.population}</p>
                <p>{singleCountryData.activePerOneMillion}</p>
                <p>{singleCountryData.recoveredPerOneMillion}</p>
                <p>{singleCountryData.criticalPerOneMillion}</p>
              </div>
            </div>



          </>
          }
        </div>
        
      </div>
    </div>
      
  );
}

export default App;
