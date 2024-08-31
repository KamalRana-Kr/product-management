// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <Link to={`/products/${product.id}`}>{product.name}</Link>
//             <button>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 300 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 400 },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 500 },
    { id: 6, name: 'Product 6', description: 'Description 6', price: 600 },
  ]);

  const handleAddToCart = (productId) => {
    console.log(`Product with ID ${productId} added to cart.`);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

