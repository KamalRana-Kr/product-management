// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get('/api/orders');
//       setOrders(response.data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h1>My Orders</h1>
//       {orders.length === 0 ? (
//         <p>You have no orders.</p>
//       ) : (
//         <ul>
//           {orders.map(order => (
//             <li key={order.id}>
//               <h2>Order ID: {order.id}</h2>
//               <ul>
//                 {order.products.map(product => (
//                   <li key={product.id}>
//                     {product.name} - ${product.price}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default OrderList;

import React, { useState } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([
    { id: 1, products: [{ name: 'Product 1', price: 100 }, { name: 'Product 2', price: 200 }], total: 300 },
    { id: 2, products: [{ name: 'Product 3', price: 150 }], total: 150 },
  ]);

  return (
    <div className="orders">
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h2>Order #{order.id}</h2>
              <ul>
                {order.products.map((product, index) => (
                  <li key={index}>
                    {product.name} - ${product.price}
                  </li>
                ))}
              </ul>
              <p>Total: ${order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;
