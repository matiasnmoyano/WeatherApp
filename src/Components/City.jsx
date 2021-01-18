import React, {useEffect,useState} from 'react'
import './City.css'
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
export default function City() {
  const [cities, setCities] = useState([
      
  ]);
  const [load, setLoad] = useState(false) 
      function onSearch(ciudad){
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`)
          .then(r => r.json())
          .then(recurso => {
            console.log(recurso,'soy recurso')
             if(recurso.main !== undefined){
              const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: Math.round(recurso.main.temp),
                name: recurso.name,
                weather: recurso.weather[0].description.charAt(0).toUpperCase() + recurso.weather[0].description.slice(1),
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon,
                humidity:recurso.main.humidity,
              };
              setCities(cities => [...cities, ciudad]);
            } else {
              alert("Ciudad no encontrada");
            } 
          })
          .then(a =>{
            setLoad(true)
          })
          
      }
      useEffect(() => {
      onSearch('buenos aires,argentina');
      onSearch('san francisco,santiago, chile')
      onSearch('Long Island, estados unidos')
      onSearch('Uruguay')
      },[]);
  console.log(cities, 'estoy en citesss')
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
                                 <img src={`https://openweathermap.org/img/wn/${city.img}@2x.png`}></img>
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
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
      </>
    )
}
