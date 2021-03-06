import "../css/Blocks.css";
const Country = ({ covidContries, id, countryName, cases, deaths, recovered, favorite,  fetchCountryData  }) => {
    
    const CountryData = () =>{
        fetchCountryData(countryName);
    }


    return ( 

        <div className="single-row" key={id}>
                    {/* <p>{id}</p> */}
            <p className="country-name" onClick={CountryData}>{countryName}</p>
                    <p>{cases}</p>
                    <p>{deaths}</p>
                    <p>{recovered}</p>
            </div>



     );
}
 
export default Country;