import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer1 from "./customer/components/Footer/Footer1";
import Product from "./customer/components/Product/Product.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import Order from "./customer/components/Order/Order.jsx";
import OrderDetails from "./customer/components/Order/OrderDetails.jsx";
import { Route, Routes } from "react-router-dom";
import CustomrRouters from "./Routers/CustomrRouters.jsx";

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomrRouters />}></Route>
      </Routes>


   
    </div>
  );
}

export default App;
