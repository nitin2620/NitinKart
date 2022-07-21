import React, { Component } from 'react'

export default class Total extends Component {
    constructor(props){
        super();
        
    }
  render() {
    var cou=0;
    this.props.item.map((key)=>{
        cou=cou+ this.props.price[key]*this.props.quantity[key];
;
    })
    console.log("total is = ")
    console.log(cou)

    return (
      <div className='row' style={{padding:"1em" ,background:"lightblue"}}>
        <div className='col-md-11'>Total</div>
        <div className='col-md-1'>{cou}</div>
      </div>
    )
  }
}
