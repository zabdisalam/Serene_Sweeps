import React from "react";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import Header from "@/components/navigation/header";

const booking = () => {
  return (
    <div>
      <h1>booking</h1>
    </div>
  );
};

booking.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      <Header page="Booking" />
      {page}
    </PrimaryLayout>
  );
};

export default booking;
