import "../css/Blocks.css";
const Country = ({covidContries, id, countryName, cases, deaths, recovered, favorite }) => {
    
    const CountryData = () =>{
        console.log(countryName);
    }


    return ( 

        <div className="single-row" key={id}>
                    {/* <p>{id}</p> */}
            <a onClick={CountryData}>{countryName}</a>
                    <p>{cases}</p>
                    <p>{deaths}</p>
                    <p>{recovered}</p>
            </div>



     );
}
 
export default Country;