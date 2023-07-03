import React from "react";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import Header from "@/components/navigation/header";
import staffData from "@/data/staff.json";
import StaffCard from "@/components/staffCard";
import Footer from "@/components/navigation/footer";

const Staff = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        {staffData.map((staff, index) => (
          <StaffCard
            key={index}
            service={staff.service}
            image={staff.image}
            name={staff.name}
            description={staff.description}
          />
        ))}
      </div>
      <div className="mb-20"></div>
    </div>
  );
};

Staff.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      <Header page="Our Staff" />
      {page}
      <Footer />
    </PrimaryLayout>
  );
};

export default Staff;
