import { useState } from 'react'
import './App.css'
import searchIcon from './assets/search.jpg'
import sunIcon from './assets/sun.webp'
import cloudIcon from './assets/cloud.webp'
import drizzleIcon from './assets/drizzle.webp'
import rainIcon from './assets/rain.jpg'
import windIcon from './assets/wind.jpg'
import snowIcon from './assets/snow.webp' 
import humiIcon from './assets/humi.jpg'
const WeatherDetails = ({icon,temp,city,country,lat,lon,humi,wind}) => {
  return(
    <>
    <div>
    <img src={icon} alt="Image" className="image"/>
    </div>
    <div className="temp">{temp}°C</div>
    <div className="loc">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
      <div>
        <span className="lat">latitude</span>
        <span>{lat}</span>
      </div>
      <div>
        <span className="lon">longitude</span>
        <span>{lon}</span>
      </div>
    </div>
    <div className="data-container">
      <div className="element">
        <img src={humiIcon} alt="Humidity" className="humi"/>
      <div className="data">
        <div className="humi-percent">{humi} %</div>
        <div className="text">Humidity</div>
      </div>
      </div>
      <div className="element">
        <img src={windIcon} alt="Wind" className="wind"/>
      <div className="data">
        <div className="wind-percent">{wind} km/h</div>
        <div className="text">Wind speed</div>
      </div>
      </div>
    </div>
  </>
  )
};

function App() {
  let key= "88d9f75642c2749f2db2abce5dbed574";
  const[text,setText]=useState("Chennai");
  const[icon,setIcon]=useState(snowIcon);
  const[temp,setTemp]=useState(0);
  const[city,setCity]=useState("Chennai");
  const[country,setCountry]=useState("IN");
  const[lat,setLat]=useState(0);
  const[lon,setLon]=useState(0);
  const[humi,setHumi]=useState(0);
  const[wind,setWind]=useState(0);

  const search= async () =>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${key}&units=Metric`;

    try{

    }catch(error){

    }for(let{first} in second) {third}
  };

  const handleCity=(e)=>{
    setText(e.target.value);
  };
  const handleKey=(e)=>{
    if(e.key === "Enter"){
      search();
    }
  };
  
  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" className="cityInput" placeholder="Search City" onChange={handleCity} value={text} onKeyDown={handleKey}/>
            
              <img src={searchIcon} onClick={()=>search()} alt="search" className="searchicon"/>

        </div>
        <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} lon={lon} humi={humi} wind={wind} />

        <p className="copyright">
          Designed by <span>Suppu</span>
        </p>
      </div>
      
    </>
  )
}
export default App
