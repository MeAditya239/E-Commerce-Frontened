import React, { use, useEffect } from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from "@mui/material/IconButton";
import { Button } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { getCart, removeItemToCart, updateItemToCart } from "../../../state/Cart/Action";

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(item?.quantity || 1);

  const handleUpdateCartItem = async (num) => {
  const temp = quantity + num;

  if (temp < 1) return; // prevent negative/0

  setQuantity(temp);

  const data = { data: { quantity: temp }, cartItemId: item?.id };
  await dispatch(updateItemToCart(data));
  dispatch(getCart());
};

  const handleRemoveCartItem = async() => {
    await dispatch(removeItemToCart(item.id))
    dispatch(getCart());
  }

  return (
    <div className="p-5 shadow-lg border-md">
      <div className="flex">
        {/* Image */}
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt=""
          />
        </div>

        {/* Details + Price in Column */}
        <div className="ml-5 flex flex-col justify-between">
          <div className=" space-y-1">
            <p className="font-semibold">  {item.product.title}</p>
            <p className="opacity-70">Size : { item.size}, White</p>
            <p className="opacity-70 mt-2"> Seller:  {item.product.brand}</p>
          </div>

          <div className=" flex items-center pt-6 space-x-5 text-gray-900">
            <p className=" font-semibold">₹ {item?.product?.price} </p>
            <p className="opacity-50 line-through">₹ {item?.product?.discountedPrice}</p>
            <p className="font-semibold text-green-600"> {item?.product?.discountedPersent}% Off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">

        <div className="flex items-center space-x-2">
            <IconButton onClick={ ()  => handleUpdateCartItem(-1) } disabled={ item?.quantity === 1}>
                <RemoveCircleIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">{quantity}</span>
            <IconButton onClick={ ()  => handleUpdateCartItem(1) } sx={{color:"RGB(145 85 253"}}>
                <AddCircleIcon/>
            </IconButton>
        </div>

        <div>
            <Button onClick= { handleRemoveCartItem} sx={{color:"RGB(145 85 253)"}}>Remove</Button>
        </div>


      </div>
    </div>
  );
};

export default CartItem;
