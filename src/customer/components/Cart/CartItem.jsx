import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from "@mui/material/IconButton";
import { Button } from "@headlessui/react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border-md">
      <div className="flex">
        {/* Image */}
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/2/q/g/30-jeans-kneecut-black-crishtaliyo-2fashion-original-imagqy6gzmpwqkge.jpeg?q=70"
            alt=""
          />
        </div>

        {/* Details + Price in Column */}
        <div className="ml-5 flex flex-col justify-between">
          <div className=" space-y-1">
            <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
            <p className="opacity-70">Size" L, White</p>
            <p className="opacity-70 mt-2">Seller: Crishtaliyo 2 fashion</p>
          </div>

          <div className=" flex items-center pt-6 space-x-5 text-gray-900">
            <p className=" font-semibold">₹399</p>
            <p className="opacity-50 line-through">₹245</p>
            <p className="font-semibold text-green-600">5% Off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">

        <div className="flex items-center space-x-2">
            <IconButton>
                <RemoveCircleIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3</span>
            <IconButton sx={{color:"RGB(145 85 253"}}>
                <AddCircleIcon/>
            </IconButton>
        </div>

        <div>
            <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
        </div>


      </div>
    </div>
  );
};

export default CartItem;
