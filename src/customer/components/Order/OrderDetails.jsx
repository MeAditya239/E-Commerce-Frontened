import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
  // Array with 5 items to display 5 cards
  const products = [1, 2, 3, 4, 5];

  return (
    <div className="px-5 lg:px-20 pb-5">
      <div className="shadow rounded-lg p-5 mb-10">
        <h1 className="font-bold text-xl py-2">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="shadow rounded-lg p-5 mb-10">
        <OrderTracker activeStep={3} />
      </div>

      {/* Loop over products */}
      <div className="space-y-5">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg shadow-xl p-5 border-0.8"
          >
            {/* Left Side: Product Details */}
            <div className="flex items-center space-x-5">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://reyantra.com/uploads/products/3928//9032a60761ae6bcd8d0fd9581c820dc1.webp"
                alt="Product"
              /> 
              <div className="space-y-1">
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5 text-sm text-gray-500">
                  <span>Color : Blue</span>
                  <span>Size : M</span>
                </p>
                <p className="text-sm">Seller: linaria</p>
                <p className="font-bold">₹1099</p>
              </div>
            </div>

            {/* Right Side: Rate & Review */}
            <div>
              <Box sx={{ color: deepPurple[500] }}>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <StarBorderIcon sx={{ fontSize: "2rem" }} />
                  <span className="font-semibold">Rate & Review Product</span>
                </div>
              </Box>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
