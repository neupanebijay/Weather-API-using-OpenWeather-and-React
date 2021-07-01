import React, { useEffect, useState } from 'react';
import './css/weatherApi.style.css';

export const WeatherAPI = () => {

    const [city, setCity] = useState(null)
    const [citySearch, setCitySearch] = useState('Sydney');

    useEffect(() => {
        const fetchApi = async() =>{

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=f7511031bba5bf544a2460d03437fc36`;
            const response = await fetch(url);
            const respJson = await response.json();
            setCity(respJson.main)
            
        }       

            fetchApi();

    }, [citySearch])

    return (
        <div>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    className="inputField"
                    onChange={(e)=>{
                        setCitySearch(e.target.value)
                    }}
                    />
                </div>

                {city ? 

                    (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                <i class="fas fa-street-view"></i>{citySearch}
                                </h2>
                                <h1 className="temp">
                                    {city.temp} °C
                                </h1>
                                <h3 className="tempmin_max">
                                    Max: {city.temp_max} °C | 
                                    Min: {city.temp_min} °C
                                </h3>

                            </div>
                                <div className="wave -one"></div>
                                <div className="wave -two"></div>
                                <div className="wave -three"></div>

                        </div>
                    ):

                    <p className="errorMsg">No data found</p>
                
                }
                
            </div>
        </div>
    )
}
