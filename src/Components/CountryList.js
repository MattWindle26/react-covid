import "../css/Blocks.css";
import Country from "./Country"

const Covid = ({ covidContries } ) => {

    return (
        
        <>
            { covidContries.map(covidCountry => (
                <Country 
                    covidContries={covidContries}
                    id={covidCountry.countryInfo._id}
                    countryName={covidCountry.country}
                    cases={covidCountry.cases}
                    deaths={covidCountry.deaths}
                    recovered={covidCountry.recovered}
                    favorite={false}
                />

            ))}
        </>
    );
}
export default Covid;