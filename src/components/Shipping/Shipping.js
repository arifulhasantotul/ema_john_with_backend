import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import "./Shipping.css";

const Shipping = () => {
   const { user } = useAuth();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      const savedCart = getStoredCart();
      data.order = savedCart;
      // console.log(data);
      fetch("https://pure-escarpment-22232.herokuapp.com/orders", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((result) => {
            console.log(result);
            if (result.insertedId) {
               alert("Order processed successfully");
               clearTheCart();
               reset();
            }
         });
   };
   return (
      <div>
         {/* "handleSubmit" will validate your inputs before invoking "onSubmit"
          */}
         <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
               placeholder="name"
               defaultValue={user.displayName}
               {...register("name")}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
               placeholder="email"
               defaultValue={user.email}
               {...register("email", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
               <span className="error">This field is required</span>
            )}
            {/* include validation with required or other standard HTML validation rules */}
            <input
               placeholder="mobile"
               defaultValue=""
               {...register("number", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.number && (
               <span className="error">This field is required</span>
            )}
            {/* include validation with required or other standard HTML validation rules */}
            <input
               placeholder="address"
               defaultValue=""
               {...register("address", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.address && (
               <span className="error">This field is required</span>
            )}
            {/* include validation with required or other standard HTML validation rules */}
            <input
               placeholder="city"
               defaultValue=""
               {...register("city", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.city && (
               <span className="error">This field is required</span>
            )}

            <input type="submit" />
         </form>
      </div>
   );
};

export default Shipping;
