import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="shadow hover:shadow-gray-800 p-5 rounded-lg border border-gray-300 mb-4 w-full"
    >
      <div className="flex justify-between items-center w-full">
        {/* Product Info */}
        <div className="flex items-center cursor-pointer min-w-0 max-w-[50%] space-x-4">
          <img
            className="w-[5rem] h-[5rem] object-cover object-top flex-shrink-0"
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            alt=""
          />
          <div className="ml-5 space-y-2 overflow-hidden ">
            <p className="truncate font-semibold">Universal Outfit</p>
            <p className="opacity-50 text-xs font-semibold">Size : M</p>
            <p className="opacity-50 text-xs font-semibold">Color : Black</p>
          </div>
        </div>

        {/* Price */}
        <div className="mx-6 text-lg font-semibold whitespace-nowrap flex-shrink-0">
          ₹199
        </div>

        {/* Delivery Status */}
        <div className="flex flex-col items-start min-w-[180px] max-w-[30%]">
          <p className="flex items-center gap-2">
            <FiberManualRecordTwoToneIcon
              sx={{ color: "green", width: 20, height: 20 }}
            />
            <span className="truncate">Delivered On March 03</span>
          </p>
          <p className="ml-2 text-sm font-medium text-gray-800 truncate">
            Your Item Has Been Delivered
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;