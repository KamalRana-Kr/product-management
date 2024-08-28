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

// export default ProductList;

import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
  ]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
