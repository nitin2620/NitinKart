import React, { Component } from 'react'
import headset from '../photos/headset.jpg'

export default class Headset extends Component {
  constructor(props){
    super();
    this.handlesave=this.handlesave.bind(this)
  }
  handlesave(){
    this.props.increaseCount("headset",2000);
  }
 
  render() {
    return (
        <div className='row'>
        <div className='col-md-6'>
<img src={headset}></img>
        </div>
        <div className='col-md-6'>
            
        </div>
        <button type="button" class="btn btn-success" style={{margin:"1em"}} onClick={this.handlesave}> Add to cart</button>
      </div>
    )
  }
}
