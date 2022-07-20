import React, { Component } from 'react'
import watch2 from '../photos/watch2.jpg'

export default class Watch2 extends Component {
  constructor(props){
    super();
    this.handlesave=this.handlesave.bind(this)
  }
  handlesave(){
    this.props.increaseCount("watch2",500);
  }
  render() {
    return (
        <div className='row'>
        <div className='col-md-6'>
<img src={watch2}></img>
        </div>
        <div className='col-md-6'>
            
        </div>
        <button type="button" class="btn btn-success" style={{margin:"1em"}} onClick={this.handlesave}> Add to cart</button>
      </div>
    )
  }
}
