import "./css/Blocks.css";

const Covid = ({ covidContries } ) => {
    return (
        <>
            { covidContries.map(covidCountry => (
            <div className="country-block" key={covidCountry.countryInfo.id}>
                <h3>{covidCountry.country}</h3>
                <img src={covidCountry.countryInfo.flag} alt=""/>
                <p>Cases: {covidCountry.cases} </p>
                <p>Deaths: {covidCountry.deaths} </p>
                <p>Recovered: {covidCountry.recovered} </p>
            </div>
            ))}
        </>
    );
}
 
export default Covid;