import React, { Component } from 'react'

import {Routes,Route, Link } from 'react-router-dom'
import alexa from './photos/alexa.jpg'
import bottle from './photos/bottle.jpg'
import headset from './photos/headset.jpg'
import headset2 from './photos/headset2.jpg'
import shoes from './photos/shoes.jpg'
import sunglasses from './photos/sunglasses.jpg'
import watch from './photos/watch.jpg'
import watch2 from './photos/watch2.jpg'
import './products/home.css'


export default class Home extends Component {
  render() {
    return (
      <><div className='row' style={{ padding: "1em" }}>
            <div className='col-md-3' style={{ alignItem: "middle" }}>
              <Link to ='/alexa'>  <img src={alexa} style={{ height: "40%", width: "40%" }}></img></Link>
                <div className='p'>Alexa</div>
                <div className='p'>Rs.15000</div>
            </div>
            <div className='col-md-3'>
               <Link to ='/bottle'> <img src={bottle} style={{ height: "40%", width: "40%" }}></img></Link>
                <div className='p'>Bottle</div>
                <div className='p'>Rs.1500</div>
            </div>
            <div className='col-md-3'>
            <Link to ='/headset'> <img src={headset} style={{ height: "40%", width: "40%" }}></img></Link>
                <div className='p'>headset</div>
                <div className='p'>Rs.2000</div>
            </div>
            <div className='col-md-3'>
            <Link to ='/headset2'> <img src={headset2} style={{ height: "40%", width: "40%" }}></img></Link>
                <div className='p'>Headset</div>
                <div className='p'>Rs.2500</div>
            </div>





        </div><div className='row' style={{ padding: "1em"}}>
                <div className='col-md-3'>
                <Link to ='/shoes'>  <img src={shoes} style={{ height: "40%", width: "40%" }}></img></Link>
                    <div className='p'>Shoes</div>
                    <div className='p'>Rs.500</div>
                </div>
                <div className='col-md-3'>
                <Link to ='/shoes'>  <img src={sunglasses} style={{ height: "40%", width: "40%" }}></img></Link>
                    <div className='p'>Sunglasses</div>
                    <div className='p'>Rs.5000</div>
                </div>
                <div className='col-md-3'>
                <Link to ='/watch'>  <img src={watch} style={{ height: "40%", width: "40%" }}></img></Link>
                    <div className='p'>Watch</div>
                    <div className='p'>Rs.2500</div>
                </div>
                <div className='col-md-3'>
                <Link to ='/watch2'>  <img src={watch2} style={{ height: "40%", width: "40%" }}></img></Link>
                    <div className='p'>Watch</div>
                    <div className='p'>Rs.500</div>
                </div>
            </div></>
        
    )
  }
}
