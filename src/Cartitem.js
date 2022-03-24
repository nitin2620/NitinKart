import React from 'react';
class Cartitem extends React.Component{
    constructor(){
        super();
        this.state={
            title:"Mobile phone",
            price:999,
            quantity:1
        }
      // this.increaseQuantity= this.increaseQauntity.bind(this)

    }
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
        const{
            title,price,quantity
           }=this.state
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
}} onClick ={this.increaseQauntity}></img>
<img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" style={{
    height:25,width:25 ,marginRight: 10
}} onClick={this.decreaseQuantity}></img>
<img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" style={{
    height:25,width:25 ,marginRight: 10
}}></img>
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