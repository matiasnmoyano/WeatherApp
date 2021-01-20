import React, {useState}  from 'react'
import './SearchBar.css'
import swal from 'sweetalert'
export default function SearchBar({onSearch}) {
    const [city, setCity]= useState('')
    const onChange = function(e){
        setCity(e.target.value)
    }
    const onClick = function(city){
        onSearch(city)
        setCity('')
    }
    return (
        <div className='container'>
          <div class="input-group mb-3">
                <input onChange={onChange} value={city}type="text" class="form-control" placeholder="Buscar ciudad" aria-label="Buscar ciudad" aria-describedby="button-addon2"/>
                <button  onClick={() => onClick(city)}class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
          </div>
        </div>
    )
}
