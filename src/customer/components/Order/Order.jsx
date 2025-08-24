import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On the Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Canceled", value: "canceled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div className="min-h-screen bg-white p-8 flex max-w-7xl mx-auto">
      {/* Sidebar */}
      <div className="w-60 sticky top-20 rounded-lg shadow-lg bg-white p-6 border border-gray-300 h-fit">
        <h1 className="font-bold text-lg mb-6">Filter</h1>
        <h2 className="font-semibold mb-4">ORDER STATUS</h2>
        <div className="space-y-3">
          {orderStatus.map(({ label, value }) => (
            <div key={value} className="flex items-center">
              <input
                type="checkbox"
                id={value}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                defaultValue={value}
              />
              <label htmlFor={value} className="ml-3 text-sm text-gray-600">
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Order List */}
      <div className="flex-1 ml-8">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <OrderCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Order;