import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from '../Component/ProductCard'

function Product() {

  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>setProducts(data))

  },[])
  const result= useMemo(()=>{
    return products.filter((item)=>item.price<200);
  },[products])


  return (
    <main className="product-page">
        <h1>Products</h1>
        <div className="product-grid">
        {
          result.map((item)=>
            <ProductCard key={item.id} 
              image={item.image} 
              title={item.title} 
              description={item.description}
              price={item.price}
              rate={item.rating.rate}
            />
          )
        }
        </div>
    </main>
  )
}

export default Product;
