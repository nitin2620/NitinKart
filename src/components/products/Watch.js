import React, { Component } from 'react'
import watch from '../photos/watch.jpg'

export default class Watch extends Component {
  constructor(props){
    super();
    this.handlesave=this.handlesave.bind(this)
  }
  handlesave(){
    this.props.increaseCount("watch",2500);
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-6'>
<img src={watch}></img>
        </div>
        <div className='col-md-6'>
            
        </div>
        <button type="button" class="btn btn-success" style={{margin:"1em"}} onClick={this.handlesave}> Add to cart</button>
      </div>
    )
  }
}
