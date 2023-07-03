import Services from "@/components/services.js";
import NavigationBar from "../components/layouts/Navbar.js";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import Header from "@/components/navigation/header.js";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import Testomonials from "@/components/testomonials.js";
import Footer from "@/components/navigation/footer.js";
import Faq from "@/components/faq.js";

const Home = () => {
  return (
    <>
      {/* services carousel component*/}
      <div className=" mb-20">
        <Typography
          className="flex items-center justify-center pt-5 pb-10"
          variant="h2"
          color="blue-gray"
        >
          Our Services
        </Typography>
        <Services />
      </div>
      {/* testomonials section */}
      <div className="flex flex-col items-center justify-center bg-blue-gray-50">
        <Typography
          className="flex items-center justify-center pt-5 pb-10"
          variant="h2"
          color="blue-gray"
        >
          Testimonials
        </Typography>
        <Testomonials />
        <div className="m-10"></div>
      </div>
      {/* faq section */}
      <div className="flex flex-col items-center justify-center m-20">
        <Typography
          className="flex items-center justify-center pt-5 pb-10"
          variant="h2"
          color="blue-gray"
        >
          Frequently Asked Questions
        </Typography>
        <Faq />
      </div>
    </>
  );
};

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <NavigationBar />
      <Header page="Home" />
      {page}
      <Footer />
    </PrimaryLayout>
  );
};

export default Home;
