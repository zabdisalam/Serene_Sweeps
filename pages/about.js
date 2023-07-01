import React from "react";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";

// includes contact section
const about = () => {
  return (
    <div>
      <h1>about</h1>
    </div>
  );
};

about.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      {page}
    </PrimaryLayout>
  );
};

export default about;

{
  /* <nav className="flex justify-between items-center py-4">
      <Link href="/" legacyBehavior>
        <a className="font-bold text-2xl text-gray-800 dark:text-">Logo</a>
      </Link>
      <div className="flex space-x-4">
        <Link href="/about" legacyBehavior>
          <a className="text-gray-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </a>
        </Link>
        <Link href="/booking" legacyBehavior>
          <a className="text-gray-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Booking
          </a>
        </Link>
        <Link href="/pricing" legacyBehavior>
          <a className="text-gray-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Pricing
          </a>
        </Link>
        <Link href="/services" legacyBehavior>
          <a className="text-gray-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Services
          </a>
        </Link>
        <Link href="/testomonials" legacyBehavior>
          <a className="text-gray-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Testomonials
          </a>
        </Link>
      </div>
    </nav> */
}
