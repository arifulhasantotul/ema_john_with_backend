import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
   return (
      <>
         <div className="login-form">
            <h2>Create Account</h2>

            <form>
               <input type="email" placeholder="Your email" />
               <br />
               <input type="password" placeholder="New Password" />
               <br />
               <input type="password" placeholder="Re-enter Password" />
               <br />
               <input type="submit" value="Submit" />
            </form>
            <p>
               Already have an account? <Link to="/login">Login</Link>
            </p>
            <div>------------or------------</div>
            <button className="btn-regular">Google sign in</button>
         </div>
      </>
   );
};

export default Register;
