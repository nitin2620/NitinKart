import React from 'react';
class Cartitem extends React.Component{
render(){
    return (
    <><div className="Cartitem">
            <div className="Leftblock">
            <img style ={style.image} />
            </div>
        <div className="Rightblock">
                <div>phone</div>
                <div>price</div>
            </div>
            </div></>

  
    );
}
}
const style={
    image:{
        height:110,
        width:100,
        borderRadius:4
    }
}
export default Cartitem;