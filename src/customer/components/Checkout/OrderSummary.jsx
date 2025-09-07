import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../state/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../state/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);

  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);


  const handleCheckout  =() => {
    dispatch( createPayment(orderId));
  }

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        {console.log("order shiping address - ", order.order?.shipingAddress)}
        <AddressCard address={order.order?.shipingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3  relative">
          <div className="col-span-2">
            {order.order?.orderItem.map((item) => (
              <CartItem item={item} />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4 px-1">
                Price details
              </p>
              <hr />

              <div className="space-y-3 font-semibold px-2">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>

                <div className="flex justify-between pt-3 text-green-600">
                  <span>Discount</span>
                  <span>-₹{order.order?.discount}</span>
                </div>

                <div className="flex justify-between pt-3 text-green-600">
                  <span>Delivery Charge</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className=" text-green-600">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>

              <Button
                variant="contained"
                color="error"
                size="medium"
                className="mt-3 w-full py-2.5 px-5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
