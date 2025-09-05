import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../state/Cart/Action";
import { store } from "../../../state/store";

const Cart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart} = useSelector( store => store )    

  const handleCheckOut= () =>{
    navigate("/checkout?step=2")

  }

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch] )




  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
            {cart.cart?.cartItem?.map((item) => <CartItem item={item} />   )}
            
          
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4 px-1">Price details</p>
            <hr />

            <div className="space-y-3 font-semibold px-2">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{ cart.cart?.totalPrice}</span>
              </div>

              <div className="flex justify-between pt-3 text-green-600">
                <span>Discount</span>
                <span>-₹{ cart.cart?.discount}</span>
              </div>

              <div className="flex justify-between pt-3 text-green-600">
                <span>Delivery Charge</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className=" text-green-600">₹{ cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>

            <Button
            onClick={handleCheckOut}
              variant="contained"
              color="error"
              size="medium"
              className="mt-3 w-full py-2.5 px-5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
