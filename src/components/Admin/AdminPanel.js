// import React,{useState,useEffect} from "react";
// import axios from "axios";

// const AdminPanel = ()=>{
//     const [products,setProducts] = useState([])

//     const fetchProduct = async()=>{
//         try {
//             const response  = await axios.get('/api/products');
//             setProducts(response.data)
//         } catch (error) {
//             console.log('Error fetching products:',error)
//         }
//     }

//     const handleDelete = async (id)=>{
//         try {
//              await axios.delete(`/api/products/${id}`)
//              fetchProduct();
//         } catch (error) {
            
//         }
//     }

//     useEffect(()=>{
//         fetchProduct();
//     },[])

//     return (
//         <div>
//             <h1>Admin panel</h1>
//             <ul>
//                 {products.map(product=> (
//                     <li key = {product.id}>
//                     {product.name}
//                     <button onClick={ () => handleDelete(product.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default AdminPanel;

import React, { useState } from 'react';

const AdminPanel = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setNewProduct({ name: '', description: '', price: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div>
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Product Description" value={newProduct.description} onChange={handleInputChange} />
        <input type="number" name="price" placeholder="Product Price" value={newProduct.price} onChange={handleInputChange} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}  -  {product.description}  -  ${product.price}
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
