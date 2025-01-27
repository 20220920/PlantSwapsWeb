import React, { useState,useEffect } from 'react'

import './Rightbar.css'



const WeatherApp = () => {
    const[data, setData] = useState({})
    const[location, setLocation] = useState('')
    const api_key = 'f9ba2921b924e500ab940849b31fb9c1'

    const imageUrl = `${process.env.REACT_APP_PUBLIC_FOLDER}sunny.png`;



    useEffect (() => {
        const fetchDefaultWeather = async ()=> {
            const defaultLocation = "New Zealand"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`
            const res = await fetch(url)
            const defaultData = await res.json()
            setData(defaultData)
        }

        fetchDefaultWeather()
    },[])

    const handleInputChange = (e) => {
      setLocation(e.target.value)
    }

    const search = async()=>{
        if(location.trim()!==""){
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
            const res = await fetch(url)
            const searchData = await res.json()
            console.log(searchData)
            setData(searchData)
            setLocation('')
        }
    }

    const handleKeyDown = (e)=> {
        if(e.key === "Enter"){
            search()
        }
    }
  return (
    <div className="rightbarWrapper">
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">{data.name}</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" value={location} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                    <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                </div>
            </div>
            <div className="weather">
              <img src={imageUrl} alt="summy" className="image-size" />
              <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
              <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°`: null}</div>
            </div>
            <div className="weather-date">
                <p>Fri, 3 May</p>
            </div>
            <div className="weather-data">
                <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-droplet"></i>
                <div className="data">{data.main ? data.main.humidity : null}%</div>
                </div>
                <div className="wind">
                <div className="data-name">wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">{data.wind ? data.wind.speed : null}km/h</div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default WeatherApp