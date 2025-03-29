import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutDefault from "@/components/LayoutDefault.jsx";
import MenuFixed from "@/components/MenuFixed.jsx";

const Home = () => {
  const navigate = useNavigate();

  return (
    <LayoutDefault>
      <MenuFixed />
    </LayoutDefault>
  );
};

export default Home;
