import React, {useEffect,useState} from 'react'
import './City.css'

export default function City({cities,load,onSearch}) {
  
      useEffect(() => {
      onSearch('buenos aires,argentina');
      onSearch('san francisco,santiago, chile')
      onSearch('Long Island, estados unidos')
      onSearch('Uruguay')
      },[]);
 
    return (
      <>
      <div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className=" interval carousel-item active" data-bs-interval="500">
  
      <div className="card">
      <h5>Bienvenido!</h5>  
      </div>
    </div>      
              { load ?
                             cities.map(city =>{
                            return(
                               <div className=" interval carousel-item " data-bs-interval="10000">
                               <div className="card">
                                 <h2 style={{fontFamily:'Helvetica',fontSize:'50px'}}>{city.name}</h2>
                                 <h1>{city.temp}°C</h1>
                                 <img src={`https://openweathermap.org/img/wn/${city.img}@2x.png`} alt='...'></img>
                                 <h3>{city.weather}</h3>
                                 <div style={{fontFamily:'Helvetica',fontSize:'12px'}}>
                                   <h6>Viento: {city.wind}Km/h          Humedad: {city.humidity}%</h6>   
                                   <h6>Temp. mínima: {city.min}°C         Temp. máxima: {city.max}°C</h6>     
                                 </div>
                            </div>
                            </div>
                       )
                     })
                     : <h1></h1> }
              
          </div>
            
  </div>
  <a class="carousel-control-prev carrusel" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next carrusel" href="#carouselExampleInterval" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
      </>
    )
}
