import React from 'react';
import Cartitem from './Cartitem';
class Cart extends React.Component{
   constructor(){
      super();
      this.state={
         products:[
          {title:"Mobile phone",
          price:20000,
          quantity:1,
          id:1
         },
         {title:"laptop",
         price:78000,
         quantity:1,
         id:2
        },
        {title:"watch",
        price:2000,
        quantity:1,
        id:3
       },
       {title:"desktop",
       price:10000,
       quantity:1,
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
 render(){
    const{products}=this.state;
    return(
 
<div className='Cart' >
  {products.map((product)=>{
     return  <Cartitem 
     product={product} 
     IncreaseQuantity={this.IncreaseQuantity}  
     DecreaseQuantity={this.DecreaseQuantity}
     DeleteQuantity={this.DeleteQuantity}
     key={product.id}/>
  }
  )}
   
</div>
     ) ;   
 }

  
}
export default Cart;
    