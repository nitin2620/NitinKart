import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class  App extends React.Component {
  constructor(){
    super();
    this.state={
       products:[
        {title:"Mobile phone",
        price:20000,
        quantity:1,
        
        img:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:1 
      },
       {title:"laptop",
       price:78000,
       quantity:1,
       img:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
       id:2
      },
      {title:"watch",
      price:2000,
      quantity:1,
      img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      id:3
     },
     {title:"desktop",
     price:10000,
     quantity:1,
     img:'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVza3RvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ',
     id:4
    }
       ]
    }
    
  // this.increaseQuantity= this.increaseQauntity.bind(this)

}
IncreaseQuantity = (product) => {
 const{products}=this.state
 const i=products.indexOf(product)
 products[i].quantity+=1
 this.setState({
    products:products
 })

}
DecreaseQuantity = (product) => {
 const{products}=this.state
 const i=products.indexOf(product)
if(products[i].quantity===1){
return;
}
 products[i].quantity-=1
 this.setState({
    products:products
 })
}
 DeleteQuantity = (id) => {
    console.log("print it")
    const{products}=this.state
    const items=products.filter((item)=>item.id!==id);
   
   
    this.setState({
       products:items
    })
    

}
Getcount=()=>{
  const{products}=this.state;
  var count=0;
  products.forEach(product => {
    count+=product.quantity
    
  });
  return count;
}
total=()=>{
  const{products}=this.state;
  let total=0;
  products.forEach(product => {
total+=product.price    
  });
  return total;
}
  render(){
    const{products}=this.state;
  return (
   
    <div className="app" style={{background:''}}>
     <Navbar  count={this.Getcount()}/>
   <Cart 
    products={products} 
    IncreaseQuantity={this.IncreaseQuantity}  
    DecreaseQuantity={this.DecreaseQuantity}
    DeleteQuantity={this.DeleteQuantity}
    />
    <div style={{padding:10, background:'white'}}>
    <div style={{padding:10 ,background:'lightblue',} }>TOTAL:Rs.{this.total()}</div>
    </div>
   </div>
   
  );
}
}

export default App;
