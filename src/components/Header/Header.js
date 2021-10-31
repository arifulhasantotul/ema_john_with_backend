import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
   const { user, handleLogout } = useAuth();
   return (
      <div className="header">
         <img className="logo" src={logo} alt="" />
         <nav>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/review">Order Review</NavLink>
            <NavLink to="/inventory">Manage Inventory</NavLink>
            {user.email && <NavLink to="/orders">Orders</NavLink>}
            {user.email && (
               <span style={{ color: "#fff", margin: "auto 0" }}>
                  <img
                     style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        margin: "auto 0",
                     }}
                     src={user.photoURL}
                     alt=""
                  />{" "}
                  {user.displayName}{" "}
               </span>
            )}

            {user.email ? (
               <button onClick={handleLogout}>Logout</button>
            ) : (
               <NavLink to="/login">Login</NavLink>
            )}
         </nav>
      </div>
   );
};

export default Header;
