// import React from 'react';
// import Cart from './Cart';
// import Navbar from './Navbar';


// class  App extends React.Component {
//   constructor(){
//     super();
//     console.log(this);
//     this.state={
//        products:[
//         {title:"Mobile phone",
//         price:20000,
//         quantity:1,
        
//         img:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//         id:1 
//       },
//        {title:"laptop",
//        price:78000,
//        quantity:1,
//        img:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//        id:2
//       },
//       {title:"watch",
//       price:2000,
//       quantity:1,
//       img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//       id:3
//      },
//      {title:"desktop",
//      price:10000,
//      quantity:1,
//      img:'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVza3RvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ',
//      id:4
//     }
//        ]
//     }
    
//   // this.increaseQuantity= this.increaseQauntity.bind(this)

// }
// IncreaseQuantity = (product) => {
//  const{products}=this.state
//  const i=products.indexOf(product)
//  products[i].quantity+=1
//  this.setState({
//     products:products
//  })

// }
// DecreaseQuantity = (product) => {
//  const{products}=this.state
//  const i=products.indexOf(product)
// if(products[i].quantity===1){
// return;
// }
//  products[i].quantity-=1
//  this.setState({
//     products:products
//  })
// }
//  DeleteQuantity = (id) => {
//     console.log("print it")
//     const{products}=this.state
//     const items=products.filter((item)=>item.id!==id);
   
   
//     this.setState({
//        products:items
//     })
    

// }
// Getcount=()=>{
//   const{products}=this.state;
//   var count=0;
//   products.forEach(product => {
//     count+=product.quantity
    
//   });
//   return count;
// }
// total=()=>{
//   const{products}=this.state;
//   let total=0;
//   products.forEach(product => {
// total+=product.price    
//   });
//   return total;
// }
//   render(){
//     const{products}=this.state;
//   return (
   
//     <div className="app" style={{background:''}}>
//      <Navbar  count={this.Getcount()}/>
//    <Cart 
//     products={products} 
//     IncreaseQuantity={this.IncreaseQuantity}  
//     DecreaseQuantity={this.DecreaseQuantity}
//     DeleteQuantity={this.DeleteQuantity}
//     />
//     <div style={{padding:10, background:'white'}}>
//     <div style={{padding:10 ,background:'lightblue',} }>TOTAL:Rs.{this.total()}</div>
//     </div>
//    </div>
   
//   );
// }
// }

// export default App;
import React, { Component } from 'react'
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'

import Alexa from './components/products/Alexa'
import Headset from './components/products/Headset'
import Headset2 from './components/products/Headset2'
import Shoes from './components/products/Shoes'
import Sunglasses from './components/products/Sunglasses'
import  Watch from './components/products/Watch'
import Watch2 from './components/products/Watch2'
import Bottle from './components/products/Bottle'
import Cart from './components/Cart';
import alexa from './components/photos/alexa.jpg'


export default class App extends Component {
  constructor(props){
    super();
    this.state={count:0,
      item:[],
      quantity:[],
      price:[]
    };
    this.increaseCount=this.increaseCount.bind(this);
    this.increaseQuantity=this.increaseQuantity.bind(this);
    this.decreaseQuantity=this.decreaseQuantity.bind(this);
  }
  increaseCount(data,amount){
    var temp=this.state.count;
    var arr=[...this.state.item];
    var Qt=this.state.quantity;
    var Pt=this.state.price;

    if((arr.includes(data))){
      }
else{
  arr[arr.length]=data;
  Qt[data]=1;
  Pt[data]=amount;
  this.setState({count:temp+1,item:arr,quantity:Qt,price:Pt})
}
  }
  increaseQuantity(data){
   
    var count=this.state.quantity[data]+1
    var increaseQt=this.state.quantity;
    increaseQt[data]=count;
    var temp=this.state.count+1;
    
    
     this.setState({quantity:increaseQt,count:temp})
    
  }
  decreaseQuantity(data){
    var count=this.state.quantity[data]-1;
    if(count>0){
    var decreaseQt=this.state.quantity;
    decreaseQt[data]=count;
    var temp=this.state.count-1;
    
    
     this.setState({quantity:decreaseQt,count:temp})
    }
    else{
      console.log("triggered")
     var it=[...this.state.item];
     console.log(it);
    var index=it.indexOf(data)
    it.splice(index,1);

var temp=this.state.count-1;
     this.setState({item:it,count:temp})

    }
  }
  
  render() {
    console.log(this.state.item);
   
    return (
      
      <Router>
        
        <Navbar count={this.state.count}/>
        <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/alexa' element={<Alexa  increaseCount={this.increaseCount}/>}/>
        <Route path='/bottle' element={<Bottle increaseCount={this.increaseCount}/>}/>
        <Route path='/headset' element={<Headset increaseCount={this.increaseCount}/>}/>
        <Route path='/headset2' element={<Headset2 increaseCount={this.increaseCount}/>}/>
        <Route path='/shoes' element={<Shoes increaseCount={this.increaseCount}/>} />
        <Route path='/sunglasses' element={<Sunglasses increaseCount={this.increaseCount}/>}/>
        <Route path='/watch' element={<Watch increaseCount={this.increaseCount}/>}/>
        <Route path='/watch2' element={<Watch2 increaseCount={this.increaseCount}/>}/>
        <Route path='/cart' element={<Cart item={this.state.item} quantity={this.state.quantity} price={this.state.price}
        increaseQuantity={this.increaseQuantity}
        decreaseQuantity={this.decreaseQuantity}/>}/>
        
        </Routes>
      </Router>
    )
  }
}

