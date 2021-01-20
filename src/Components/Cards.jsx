import React from 'react'
import './Cards.css'
export default function Cards({cities,load}) {
   
    return (
        <>
            {load ?
            cities.map(city => {
                return (
                    <div class="card mb-1 containerCard" >
                    <div class="row g-0">
                      <div class="col-md-4">
                      <img src={`https://openweathermap.org/img/wn/${city.img}@2x.png`} alt='...'></img>
                      </div>
                      <div class="col-md-6">
                        <div class="card-body">
                          <h5 class="card-title">{city.name}</h5>
                          <p class="card-text">Viento: {city.wind}<br/>Km/h Humedad: {city.humidity}% <br/>
                          Temp. mínima: {city.min}°C  <br/>Temp. máxima: {city.max}°C
                           </p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                )
               
            })
            :<h1></h1>}
               
           
       
        </>
    )
}
