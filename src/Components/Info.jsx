import React , { useState, useEffect } from 'react'
import './Info.css'
import City from './City.jsx'
import img from '../imgs/image4.jpg'
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
export default function Info() {
    return (
        <div className='back'>
          <img src={img} className='img'></img>
          <City></City>
        </div>
    )
}
