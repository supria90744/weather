import { useState } from 'react'
import './App.css'
import searchIcon from "./assets/search.jpg"
import sunIcon from './assets/sun.webp'
import cloudIcon from './assets/cloud.webp'
import drizzleIcon from './assets/drizzle.webp'
import rainIcon from './assets/rain.jpg'
import windIcon from './assets/wind.jpg'
import snowIcon from './assets/snow.webp'
import humiIcon from './assets/humi.jpg'
function App() {
  

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" className="cityInput" placeholder="Search City"/>
          <div className="searchicon">
            <img src={searchIcon} alt="search" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
