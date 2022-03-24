import React from 'react';
class Cartitem extends React.Component{
  
    increaseQauntity = () => {
this.setState({

    quantity:this.state.quantity+1
}
    )
    }
    decreaseQuantity=()=>{
       const{quantity}=this.state
       if(quantity===0){
           return;
       }
       
        this.setState((previState)=>{
           return{
                quantity:this.state.quantity-1
           }
            }
        )
    
    }
    render(){
        const {title,price,quantity} =this.props.product
    return (
        
       
    <><div className="Cartitem">
            <div className="Leftblock">
            <img style ={style.image} />
            </div>
        <div className="Rightblock">
                <div style={{fontSize:25}}> {title}</div>
                <div style={{color:'#777'}}>{price}</div>
                <div style={{color:'#777'}}>{quantity}</div>
                <div className="cart-item-action">
<img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" style={{
    height:25,width:25,marginRight: 10
}} onClick ={()=>{this.props.IncreaseQuantity(this.props.product)}}></img>
<img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" style={{
    height:25,width:25 ,marginRight: 10
}} onClick={()=>{this.props.DecreaseQuantity(this.props.product)}}></img>
<img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" style={{
    height:25,width:25 ,marginRight: 10
}} onClick={()=>{this.props.DeleteQuantity(this.props.product.id)}}></img>
                </div>
            </div>

            </div></>

    );
}
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