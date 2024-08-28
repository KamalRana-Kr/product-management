// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get('/api/cart');
//       setCartItems(response.data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const handleRemoveFromCart = async (id) => {
//     try {
//       await axios.delete(`/api/cart/${id}`);
//       fetchCartItems();
//     } catch (error) {
//       console.error('Error removing product from cart:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   return (
//     <div>
//       <h1>Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cartItems.map(item => (
//             <li key={item.id}>
//               {item.product.name} - ${item.product.price}
//               <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, product: { id: 1, name: 'Product 1', price: 100 } },
    { id: 2, product: { id: 2, name: 'Product 2', price: 200 } },
  ]);

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.product.name} - ${item.product.price}
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
