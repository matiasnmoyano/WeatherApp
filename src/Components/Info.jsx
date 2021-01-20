import React , {useState, useEffect} from 'react'
import './Info.css'
import City from './City.jsx'
import img from '../imgs/image4.jpg'
import SearchBar from './SearchBar.jsx'
import Cards from './Cards.jsx'
import swal from 'sweetalert'
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
export default function Info() {
  const [cities, setCities] = useState([
      
  ]);
  console.log(cities)
  const [load, setLoad] = useState(false) 
      const onSearch = function(ciudad){
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`)
          .then(r => r.json())
          .then(recurso => {
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
              swal({
                title: "Error",
                text: `Ciudad no encontrada`,
                icon: "info",
                button: "Aceptar",
              });
            } 
          })
          .then(a =>{
            setLoad(true)
          })
          return true
        }   
        useEffect(() => {
            
          },[]);
    return (
        <div className='back'>
          <img src={img} className='img'alt='...'></img>
          <City cities={cities} load={load} onSearch={onSearch}></City>
          <div>
          <SearchBar onSearch={onSearch} ></SearchBar>
          </div>
          <div className='containerGral '>
            <Cards cities={cities} load={load}></Cards>
          </div>
        </div>
    )
}
