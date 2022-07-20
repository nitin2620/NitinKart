import React, { Component } from 'react'
import headset2 from '../photos/headset2.jpg'

export default class Headset2 extends Component {
  constructor(props){
    super();
    this.handlesave=this.handlesave.bind(this)}
  handlesave(){
    this.props.increaseCount("headset2",2500);
  }
  render() {
    return (
        <div className='row'>
        <div className='col-md-6'>
<img src={headset2}></img>
        </div>
        <div className='col-md-6'>
            
        </div>
        <button type="button" class="btn btn-success" style={{margin:"1em"}} onClick={this.handlesave}> Add to cart</button>
      </div>
    )
  }
}
