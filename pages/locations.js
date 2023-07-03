import React from "react";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import Header from "@/components/navigation/header";
import Location from "@/components/location";
import CompanyInfo from "@/components/companyInfo";
import Contact from "@/components/contact";
import Footer from "@/components/navigation/footer";

const locations = () => {
  return (
    <div className="mt-20">
      <Location component={<CompanyInfo />} />
      <div className="items-center flex justify-center my-20">
        <Contact />
      </div>
    </div>
  );
};

locations.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      <Header page="Locations" />
      {page}
      <Footer />
    </PrimaryLayout>
  );
};

export default locations;
