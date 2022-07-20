import React, { Component } from 'react'
import shoes from '../photos/shoes.jpg'


export default class Shoes extends Component {
  constructor(props){
    super();
    this.handlesave=this.handlesave.bind(this)}
  handlesave(){
    this.props.increaseCount("shoes",500);
  }
  render() {
    return (
        <div className='row'>
        <div className='col-md-6'>
<img src={shoes}></img>
        </div>
        <div className='col-md-6'>
            
        </div>
        <button type="button" class="btn btn-success" style={{margin:"1em"}} onClick={this.handlesave}> Add to cart</button>
      </div>
    )
  }
}
