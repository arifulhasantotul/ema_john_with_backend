import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Orders = () => {
   const [orders, setOrders] = useState([]);
   const { user } = useAuth();

   useEffect(() => {
      const url = `http://localhost:8080/orders?email=${user.email}`;
      fetch(url, {
         headers: {
            authorization: `Bearer ${localStorage.getItem("idToken")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => setOrders(data));
   }, [user.email]);
   return (
      <div>
         <h2>Ordered items: {orders.length}</h2>
         <ul>
            {orders.map((order) => (
               <li key={order._id}>
                  {order.name} :: {order.email}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Orders;
