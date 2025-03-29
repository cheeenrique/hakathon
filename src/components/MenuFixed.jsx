import { Calendar, Home, ShoppingBag } from "lucide-react";
import React from "react";

const MenuFixed = () => {
  return (
    <div className="bg-white rounded-t-lg shadow-md p-4 flex justify-center border-t border-gray-300">
      <button className="text-blue-500 hover:text-blue-700">
        <Home size={24} />
      </button>
      <button className="text-blue-500 hover:text-blue-700">
        <Calendar size={24} />
      </button>
      <button className="text-blue-500 hover:text-blue-700">
        <ShoppingBag size={24} />
      </button>
    </div>
  );
};

export default MenuFixed;
