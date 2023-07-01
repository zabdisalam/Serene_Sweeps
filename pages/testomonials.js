import React from "react";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";

const testomonials = () => {
  return (
    <div>
      <h1>testomonials</h1>
    </div>
  );
};

testomonials.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      {page}
    </PrimaryLayout>
  );
};

export default testomonials;
