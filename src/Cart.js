import React from 'react';
import Cartitem from './Cartitem';
const Cart=(props)=>{
  const{products}=props;
    return(
 
<div className='Cart' >
  {products.map((product)=>{
     return  <Cartitem 
     product={product} 
     IncreaseQuantity={props.IncreaseQuantity}  
     DecreaseQuantity={props.DecreaseQuantity}
     DeleteQuantity={props.DeleteQuantity}
     key={product.id}/>
  }
  )}
   
</div>
     ) ;   
 }

  

export default Cart;
    