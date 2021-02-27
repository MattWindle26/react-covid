import cases from '../Icons/group.svg';
import deaths from '../Icons/skull.svg';
import recovered from '../Icons/hospital.svg';
import '../css/App.css';


const GlobalStats = ({ covidAll }) => {

const strip = (num) =>{
    const l = num.toString().length;
    console.log(l);
    if(l < 10){
        num = num.toString().slice(0, -6) + "M";
    }else{
        num = num.toString().slice(0, -8);
        num = num.slice(0, 1) + "." + num.slice(1) + "B";
    }
    return num;
};

    return ( 
        <>
            { covidAll.map(allData => (
                <div className="global-data">
                    <div className="gd-stat">
                        <h3>Cases</h3>
                        <p>{strip(allData.cases)}</p>
                    </div>
                    <div className="gd-stat">
                        <h3>Deaths</h3>
                        <p>{strip(allData.deaths)}</p>
                    </div>
                    <div className="gd-stat">
                        <h3>Recovered</h3>
                        <p>{strip(allData.recovered)}</p>
                    </div>                   
                     <div className="gd-stat">
                        <h3>Tests</h3>
                        <p>{strip(allData.tests)}</p>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default GlobalStats;