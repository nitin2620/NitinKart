import React, { Component } from 'react'
import sunglasses from '../photos/sunglasses.jpg'

export default class Sunglasses extends Component {
  constructor(props){
    super();
    this.handlesave=this.handlesave.bind(this)
  }
  handlesave(){
    this.props.increaseCount("sunglasses",5000);
  }
  render() {
    return (
        <div className='row'>
        <div className='col-md-6'>
<img src={sunglasses}></img>
        </div>
        <div className='col-md-6'>
            
        </div>
        <button type="button" class="btn btn-success" style={{margin:"1em"}} onClick={this.handlesave}> Add to cart</button>
      </div>
    )
  }
}
