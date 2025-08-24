import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>

      <div>
        <div className="lg:grid grid-cols-3  relative">
          <div className="col-span-2">
            {[1, 2, 3, 4].map((item) => (
              <CartItem />
            ))}
            <CartItem />
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
                  <span>₹4567</span>
                </div>

                <div className="flex justify-between pt-3 text-green-600">
                  <span>Discount</span>
                  <span>-₹3147</span>
                </div>

                <div className="flex justify-between pt-3 text-green-600">
                  <span>Delivery Charge</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className=" text-green-600">₹1278</span>
                </div>
              </div>

              <Button
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
    </div>
  );
};

export default OrderSummary;
