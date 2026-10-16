import React, { memo, useContext } from 'react'
import { CartContext } from '../Context/CartContext';

export 
function ProductCard({image,title,price,rate}) {


  const {dispatch}= useContext(CartContext)
  return (

    <div className='card-container'>
       <div className='Card'>
        <img src={image}alt="" />
        <h2>{title}</h2>
        <h4>₹ {price}</h4>
        <h6 style={{fontWeight:"bolder", marginTop:"5px"}}>Rating: ⭐{rate}</h6>
        <button onClick={()=>dispatch({type:"Add_To_Cart",payload:{image,title,price}})}>
          Add To Cart
        </button>

    </div>
    </div>
  )
}

export default memo (ProductCard);
