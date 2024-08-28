
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ProductDetail = () =>{
    const {id} = useParams();

    const [product,setProduct] = useState(null)

    const fetchProduct = async () =>{
        try {
            const response = await axios.get(`/api/product/${id}`)
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }


    useEffect(()=>{
        fetchProduct();
    },[id]);

    const handleAddToCart = async()=>{
        try {
            await axios.post(`/api/cart`, { productId: id });
            alert('Product added to cart!');
          } catch (error) {
            console.error('Error adding product to cart:', error);
          }
        }

        if(!product) return <div>Loading...</div>;

        return (
            <div>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          );
}
export default ProductDetail;
