import React from "react";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import Pricings from "@/components/pricings";
import { Typography } from "@material-tailwind/react";

const pricing = () => {
  return (
    <div>
      <Typography className="text-center text-4xl font-bold my-10">
        Pricing
      </Typography>
      {/* Pricing Cards */}
      <Pricings />
      <div className="mb-20"></div>
    </div>
  );
};

pricing.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      <Header page="Pricing" />
      {page}
      <Footer />
    </PrimaryLayout>
  );
};

export default pricing;
