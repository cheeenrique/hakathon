import React from "react";
import SalesHistory from "../components/SalesHistory.jsx";
import { salesHistory } from "../mockData";

const History = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Histórico</h1>
      <SalesHistory sales={salesHistory} />
    </div>
  );
};

export default History;
