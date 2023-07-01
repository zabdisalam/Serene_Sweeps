import React from "react";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";

const services = () => {
  return (
    <div>
      <h1>services</h1>
    </div>
  );
};

services.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      {page}
    </PrimaryLayout>
  );
};

export default services;
