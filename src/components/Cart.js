import React, { Component } from 'react'
import alexa from './photos/alexa.jpg'
import bottle from './photos/bottle.jpg'
import headset from './photos/headset.jpg'
import headset2 from './photos/headset2.jpg'
import shoes from './photos/shoes.jpg'
import sunglasses from './photos/sunglasses.jpg'
import watch from './photos/watch.jpg'
import watch2 from './photos/watch2.jpg'

export default class Cart extends Component {
    constructor(props){
        super();
       this.state={data:[],
      } 
      this.increase=this.increase.bind(this)
      this.decrease=this.decrease.bind(this)
     
    }
  
    increase(event){
      console.log(event.target.id)
      this.props.increaseQuantity(event.target.id)

    }
    decrease(event){
      console.log(event.target.id)
      this.props.decreaseQuantity(event.target.id)

    }
  render() {
    this.state.data=[...this.props.item]
   console.log(this.props)
   
   var cart=this.state.data.map(key=>{
  
    
   
    switch (key) {
      case "alexa":
        return (<div className='row' style={{background:"grey",padding:"1em",height:"25vh",display:"flex",alignItems:"center"}}>
          
          <div className='col-md-2'>
          <img src={alexa} style={{maxHeight:"20vh",minHeight:"10vh",padding:"1em"}}></img>
          </div>
          <div className='col-md-8'>
          <button type="button" class="btn btn-primary"style={{background:"silver"}}>
  Quantity <span class="badge badge-light">{this.props.quantity[key]}</span>
</button>
          </div>
          <div className='col-md-2'>
          <div class="btn-group" role="group" aria-label="Basic example" style={{background:"lightcyan"}}>

  <button type="button" class="btn btn-secondary "style={{background:"lightgreen"}} id={key} onClick={this.increase}> Add</button>
  <button type="button" class="btn btn-secondary"style={{background:"red"}}  id={key} onClick={this.decrease}>Delete</button>
</div>
</div>
          </div>)
        
        break;
        case "bottle":
        return (
          <div className='row' style={{background:"grey",padding:"1em",height:"25vh",display:"flex",alignItems:"center"}}>
          
          <div className='col-md-2'>
          <img src={bottle} style={{maxHeight:"20vh",minHeight:"10vh",padding:"1em"}}></img>
          </div>
          <div className='col-md-8'>
          <button type="button" class="btn btn-primary"style={{background:"silver"}}>
  Quantity <span class="badge badge-light">{this.props.quantity[key]}</span>
</button>
          </div>
          <div className='col-md-2'>
          <div class="btn-group" role="group" aria-label="Basic example" style={{background:"lightcyan"}}>

  <button type="button" class="btn btn-secondary "style={{background:"lightgreen"}} id={key} onClick={this.increase}> Add</button>
  <button type="button" class="btn btn-secondary"style={{background:"red"}}  id={key} onClick={this.decrease}>Delete</button>
</div>
</div>
          </div>
          )
        
        break;
        case "headset":
        return (
          <div className='row' style={{background:"grey",padding:"1em",height:"25vh",display:"flex",alignItems:"center"}}>
          
          <div className='col-md-2'>
          <img src={headset} style={{maxHeight:"20vh",minHeight:"10vh",padding:"1em"}}></img>
          </div>
          <div className='col-md-8'>
          <button type="button" class="btn btn-primary"style={{background:"silver"}}>
  Quantity <span class="badge badge-light">{this.props.quantity[key]}</span>
</button>
          </div>
          <div className='col-md-2'>
          <div class="btn-group" role="group" aria-label="Basic example" style={{background:"lightcyan"}}>

  <button type="button" class="btn btn-secondary "style={{background:"lightgreen"}} id={key} onClick={this.increase}> Add</button>
  <button type="button" class="btn btn-secondary"style={{background:"red"}}  id={key} onClick={this.decrease}>Delete</button>
</div>
</div>
          </div>
          )
        
        break;
        case "headset2":
        return (<div className='row' style={{background:"grey",padding:"1em",height:"25vh",display:"flex",alignItems:"center"}}>
          
        <div className='col-md-2'>
        <img src={headset2} style={{maxHeight:"20vh",minHeight:"10vh",padding:"1em"}}></img>
        </div>
        <div className='col-md-8'>
        <button type="button" class="btn btn-primary"style={{background:"silver"}}>
Quantity <span class="badge badge-light">{this.props.quantity[key]}</span>
</button>
        </div>
        <div className='col-md-2'>
        <div class="btn-group" role="group" aria-label="Basic example" style={{background:"lightcyan"}}>

<button type="button" class="btn btn-secondary "style={{background:"lightgreen"}} id={key} onClick={this.increase}> Add</button>
<button type="button" class="btn btn-secondary"style={{background:"red"}}  id={key} onClick={this.decrease}>Delete</button>
</div>
</div>
        </div>
          )
        
        break;
        case "shoes":
        return (
          <div className='row' style={{background:"grey",padding:"1em",height:"25vh",display:"flex",alignItems:"center"}}>
          
          <div className='col-md-2'>
          <img src={shoes} style={{maxHeight:"20vh",minHeight:"10vh",padding:"1em"}}></img>
          </div>
          <div className='col-md-8'>
          <button type="button" class="btn btn-primary"style={{background:"silver"}}>
  Quantity <span class="badge badge-light">{this.props.quantity[key]}</span>
</button>
          </div>
          <div className='col-md-2'>
          <div class="btn-group" role="group" aria-label="Basic example" style={{background:"lightcyan"}}>

  <button type="button" class="btn btn-secondary "style={{background:"lightgreen"}} id={key} onClick={this.increase}> Add</button>
  <button type="button" class="btn btn-secondary"style={{background:"red"}}  id={key} onClick={this.decrease}>Delete</button>
</div>
</div>
          </div>
        )
        
        break;
        case "sunglasses":
        return (
          <div className='row' style={{background:"grey",padding:"1em",height:"25vh",display:"flex",alignItems:"center"}}>
          
          <div className='col-md-2'>
          <img src={sunglasses} style={{maxHeight:"20vh",minHeight:"10vh",padding:"1em"}}></img>
          </div>
          <div className='col-md-8'>
          <button type="button" class="btn btn-primary"style={{background:"silver"}}>
  Quantity <span class="badge badge-light">{this.props.quantity[key]}</span>
</button>
          </div>
          <div className='col-md-2'>
          <div class="btn-group" role="group" aria-label="Basic example" style={{background:"lightcyan"}}>

  <button type="button" class="btn btn-secondary "style={{background:"lightgreen"}} id={key} onClick={this.increase}> Add</button>
  <button type="button" class="btn btn-secondary"style={{background:"red"}}  id={key} onClick={this.decrease}>Delete</button>
</div>
</div>
          </div>
        )
        
        break;
        case "watch":
        return (
          <div className='row' style={{background:"grey",padding:"1em",height:"25vh",display:"flex",alignItems:"center"}}>
          
          <div className='col-md-2'>
          <img src={watch} style={{maxHeight:"20vh",minHeight:"10vh",padding:"1em"}}></img>
          </div>
          <div className='col-md-8'>
          <button type="button" class="btn btn-primary"style={{background:"silver"}}>
  Quantity <span class="badge badge-light">{this.props.quantity[key]}</span>
</button>
          </div>
          <div className='col-md-2'>
          <div class="btn-group" role="group" aria-label="Basic example" style={{background:"lightcyan"}}>

  <button type="button" class="btn btn-secondary "style={{background:"lightgreen"}} id={key} onClick={this.increase}> Add</button>
  <button type="button" class="btn btn-secondary"style={{background:"red"}}  id={key} onClick={this.decrease}>Delete</button>
</div>
</div>
          </div>
        )
        
        break;
        case "watch2":
        return (
          <div className='row' style={{background:"grey",padding:"1em",height:"25vh",display:"flex",alignItems:"center"}}>
          
          <div className='col-md-2'>
          <img src={watch2} style={{maxHeight:"20vh",minHeight:"10vh",padding:"1em"}}></img>
          </div>
          <div className='col-md-8'>
          <button type="button" class="btn btn-primary"style={{background:"silver"}}>
  Quantity <span class="badge badge-light">{this.props.quantity[key]}</span>
</button>
          </div>
          <div className='col-md-2'>
          <div class="btn-group" role="group" aria-label="Basic example" style={{background:"lightcyan"}}>

  <button type="button" class="btn btn-secondary "style={{background:"lightgreen"}} id={key} onClick={this.increase}> Add</button>
  <button type="button" class="btn btn-secondary"style={{background:"red"}}  id={key} onClick={this.decrease}>Delete</button>
  <span class="badge badge-danger">Danger</span>
</div>
</div>
          </div>
        )
        
        break;
    
      default:
        break;
    }
   })
    return (
      <div>
        {cart}
        
      </div>
    )
  }
}
