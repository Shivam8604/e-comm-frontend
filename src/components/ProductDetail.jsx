/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import items from './Data';
import Product from './Product';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct,setRelatedProduct] = useState([]);


  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id)
    setProduct(filterProduct[0]);

    const relatedProduct = items.filter((suman)=>suman.category === product.category);

    console.log(relatedProduct)
    setRelatedProduct(relatedProduct)


  }, [id,product.category])

  return (
    <>
    <div className='container d-flex con'>
      <div className='img'>
        <img src={product.imgSrc} />
      </div>
      <div className='text-center'>
        <h1 className="card-title">{product.title}</h1>
        <p className="card-text">{product.description}</p>
        <button className='btn btn-primary mx-3'>{product.price}&#8377; </button>
        <button className='btn-'>Add to Cart</button>
      </div>
    </div>
    <h2 className='text-center text-primary'>Related Products</h2>
    <Product items={relatedProduct}/>
    </>
    
  )
}

export default ProductDetail
