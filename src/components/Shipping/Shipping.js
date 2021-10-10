import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
   const { user } = useAuth();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);
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
               {...register("numberRequired", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.numberRequired && (
               <span className="error">This field is required</span>
            )}
            {/* include validation with required or other standard HTML validation rules */}
            <input
               placeholder="address"
               defaultValue=""
               {...register("addressRequired", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.addressRequired && (
               <span className="error">This field is required</span>
            )}
            {/* include validation with required or other standard HTML validation rules */}
            <input
               placeholder="city"
               defaultValue=""
               {...register("cityRequired", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.cityRequired && (
               <span className="error">This field is required</span>
            )}

            <input type="submit" />
         </form>
      </div>
   );
};

export default Shipping;
