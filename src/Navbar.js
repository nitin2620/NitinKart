import React from 'react';
const Navbar=(props)=>{
   return (
        <>
        
        <div className="Navbar" style={style.nav}>
          
<div style={style.cartIconContainer}>
    <img src=" https://cdn-icons-png.flaticon.com/128/3144/3144456.png" style={style.cartIcon}>
       
    </img>
    <div style={style.cartCount}>{props.count}</div>
</div>
        </div>
        </>
       
    

    );
}

const style = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
   
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
export default Navbar;