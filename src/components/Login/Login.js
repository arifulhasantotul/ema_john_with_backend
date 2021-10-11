import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
   const { signInUsingGoogle } = useAuth();
   const location = useLocation();
   const history = useHistory();
   const redirect_uri = location.state?.from || "/shop";
   // console.log("came from", location.state?.from);

   const handleGoogleLogin = () => {
      signInUsingGoogle().then((result) => {
         history.push(redirect_uri);
      });
   };
   return (
      <>
         <div className="login-form">
            <h2>Login</h2>
            <form>
               <input type="email" placeholder="Your Email" />
               <br />
               <input type="password" placeholder="password" />
               <br />
               <input type="submit" value="Submit" />
            </form>
            <p>
               new to ema-john app? <Link to="register">Create Account</Link>
            </p>
            <div>------------or------------</div>
            <button onClick={handleGoogleLogin} className="btn-regular">
               Google sign in
            </button>
         </div>
      </>
   );
};

export default Login;
