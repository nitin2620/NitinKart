import React, { Component } from 'react'
import bottle from '../photos/bottle.jpg'

export default class Bottle extends Component {
  constructor(props){
    super();
    this.handlesave=this.handlesave.bind(this);
    }
    handlesave(){
      this.props.increaseCount("bottle",1500);
    }
  render() {
   
    return (
        <div className='row'>
        <div className='col-md-6'>
<img src={bottle}></img>
        </div>
        <div className='col-md-6'>
            
        </div>
        <button type="button" class="btn btn-success" style={{margin:"1em"}} onClick={this.handlesave}> Add to cart</button>
      </div>
    )
  }
}
