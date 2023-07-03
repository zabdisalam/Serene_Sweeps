import React from "react";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { Typography } from "@material-tailwind/react";
import Location from "@/components/location";
import Contact from "@/components/contact";

// includes contact section
const About = () => {
  return (
    <>
      {/* about */}
      <div className="mb-20">
        <Typography
          className="flex items-center justify-center pt-5 pb-10"
          variant="h2"
          color="blue-gray"
        >
          About Us
        </Typography>
        <Typography className="text-center font-thin" variant="h6">
          At Serene Sweeps, we believe a clean home is a serene home. We're a
          team of professional cleaners dedicated to transforming houses into
          immaculate homes.
        </Typography>

        <Typography className="text-center font-thin mt-4" variant="h6">
          Established in 2023, our mission has been to provide top-quality,
          reliable, and efficient cleaning services that cater to both
          residential and commercial needs. Our highly trained staff specialize
          in various types of cleaning services, including general cleaning,
          deep cleaning, and specialized cleaning.
        </Typography>

        <Typography className="text-center font-thin mt-4" variant="h6">
          We understand that every home and business has its own unique cleaning
          needs. That's why we tailor our cleaning services to fit your specific
          requirements, ensuring that we leave your space spotlessly clean every
          time.
        </Typography>

        <Typography className="text-center font-thin mt-4" variant="h6">
          Our commitment to customer satisfaction is unparalleled. We listen, we
          care, and we strive to exceed your expectations. At Serene Sweeps,
          your comfort and satisfaction are our highest priorities.
        </Typography>

        <Typography className="text-center font-thin mt-4" variant="h6">
          We don't just clean houses—we bring peace, relaxation, and serenity to
          your living and working spaces. Welcome to a cleaner, more serene
          world with Serene Sweeps.
        </Typography>
      </div>
      {/* contact us and Location*/}
      <Location component={<Contact />} />
      <div className="mb-10"></div>
    </>
  );
};

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      <Header page="About" />
      {page}
      <Footer />
    </PrimaryLayout>
  );
};

export default About;
