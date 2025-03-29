import React from "react";

const LayoutDefault = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#F4F5FC]">
      <div className="w-[420px] h-full max-h-screen bg-white shadow-lg rounded-lg overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default LayoutDefault;
