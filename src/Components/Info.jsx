import React  from 'react'
import './Info.css'
import City from './City.jsx'
import img from '../imgs/image4.jpg'
export default function Info() {
    return (
        <div className='back'>
          <img src={img} className='img'alt='...'></img>
          <City></City>
        </div>
    )
}
