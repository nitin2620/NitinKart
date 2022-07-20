import React, { Component } from 'react'
import alexa from '../photos/alexa.jpg'

export default class Alexa extends Component {
  constructor(props){
    super();
    this.handlesave=this.handlesave.bind(this)
    }
    handlesave(){
      this.props.increaseCount("alexa",15000)
    }
  render() {
   
    return (
      <div className='row'>
        <div className='col-md-6'>
<img src={alexa}></img>
        </div>
        <div className='col-md-6'>
            
        </div>
        <button type="button" class="btn btn-success" style={{margin:"1em"}} onClick={this.handlesave}> Add to cart</button>
      </div>
    )
  }
}
