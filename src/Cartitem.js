import React from 'react';
const Cartitem=(props)=>{
   const {title,price,quantity} =props.product;
   const {
    product,
    IncreaseQuantity,
    DecreaseQuantity,
    DeleteQuantity,
    
  } = props;
    return (
        
       
    <><div className="Cartitem">
            <div className="Leftblock">
            <img src={product.img} style ={style.image} />
            </div>
        <div className="Rightblock">
                <div style={{fontSize:25}}> {title}</div>
                <div style={{color:'#777'}}>{price}</div>
                <div style={{color:'#777'}}>{quantity}</div>
                <div className="cart-item-action">
<img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" style={{
    height:25,width:25,marginRight: 10
}} onClick ={()=>{IncreaseQuantity(product)}}></img>
<img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" style={{
    height:25,width:25 ,marginRight: 10
}} onClick={()=>{DecreaseQuantity(product)}}></img>
<img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" style={{
    height:25,width:25 ,marginRight: 10
}} onClick={()=>{DeleteQuantity(product.id)}}></img>
                </div>
            </div>

            </div></>

    );
}

const style={
    image:{
        height:110,
        width:100,
        borderRadius:4,
        background:'#777'
    }
  
}
export default Cartitem;