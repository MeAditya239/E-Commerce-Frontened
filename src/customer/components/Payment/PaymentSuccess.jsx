import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getOrderById } from "../../../state/Order/Action";
import { updatePayment } from "../../../state/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();

  const { orderId } = useParams();

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store.order);

  console.log("order:", order);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);

    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    const data = { orderId, paymentId };

    dispatch(getOrderById(orderId));
    dispatch(updatePayment(data));
  }, [orderId, paymentId]);

  return (
    <div>
      <div className="px-2 lg:px-36">
        <div className="flex flex-col justify-center items-center">
          <Alert
            variant="filled"
            severity="success"
            sx={{ mb: 6, width: "fit-content" }}
          >
            <AlertTitle> Payment Success</AlertTitle>
            congratulations Your Order gets placed
          </Alert>
        </div>

        <OrderTracker activeStep={1} />

        <Grid container spacing={3} className="py-5 pt-20 ">
          {order?.orderItem?.map((item) => (
            <Grid
              container
              item
              key={item.id}
              className="shadow-xl rounded-md p-5"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              {/* Left side - Product Info */}
              <Grid item xs={12} md={6}>
                <div className="flex items-center">
                  <img
                    src={
                      item.product?.imageUrl || "https://via.placeholder.com/80"
                    }
                    alt={item.product?.title}
                    className="w-28 h-28 object-cover rounded-md"
                  />

                  <div className="ml-5 space-y-2">
                    <p className="font-semibold">{item.product?.title}</p>
                    <div className="opacity-50 text-xs font-semibold space-x-5">
                      <span>Color: {item.color}</span>
                      <span>Size: {item.size}</span>
                    </div>
                    <p>Seller: {item.product?.brand}</p>
                    <p className="font-bold">₹ {item.price}</p>
                  </div>
                </div>
              </Grid>

              {/* Right side - Address */}
              <Grid item xs={12} md={5}>
                <AddressCard address={order?.shipingAddress} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PaymentSuccess;
