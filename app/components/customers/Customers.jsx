"use client";
import React from "react";
import CustomerSlider from "./CustomersSlider";

const Customers = () => {
  return (
    <div className="container mt-[66px]">
      <h1 className="text-[28px] sm:text-[52px] font-bold text-center mb-[50px]">Customers</h1>
      <div className="slider">
        <CustomerSlider />
      </div>
    </div>
  );
};

export default Customers;
