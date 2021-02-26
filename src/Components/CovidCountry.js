import "../css/Blocks.css";

const Covid = ({ covidContries } ) => {
    return (
        
        <>
        
            { covidContries.map(covidCountry => (
            <div className="single-row" key={covidCountry.countryInfo.id}>
                    <p>{covidCountry.country}</p>
                    <p>{covidCountry.cases}</p>
                    <p>{covidCountry.deaths}</p>
                    <p>{covidCountry.recovered}</p>
                    {/* 
                    {covidCountry.countryInfo.flag} */}
            </div>
            ))}
        </>
    );
}
export default Covid;