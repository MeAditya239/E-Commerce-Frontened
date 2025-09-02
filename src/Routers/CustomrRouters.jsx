import React from "react";
import Navigation from "../customer/components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Footer1 from "../customer/components/Footer/Footer1";
import OrderSummary from "../customer/components/Checkout/OrderSummary";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";

const CustomrRouters = () => {
  return (
    <div>


      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path='/login' element={<HomePage/>} ></Route>
        <Route path='/register' element={<HomePage/>} ></Route>

        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelthree' element={ <Product/> } ></Route>
        <Route path='/product/:productid' element={ <ProductDetails/> } ></Route>
        <Route path='/checkout' element={ <Checkout/> }></Route>
        <Route path='/account/order' element={ <Order/> }></Route>
        <Route path='/account/order/:orderId' element={ <OrderDetails/> }></Route>
        

      </Routes>

      <div>
        <Footer1/>
      </div>



    </div>
  );
};

export default CustomrRouters;
