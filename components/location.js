import React from "react";
import Contact from "@/components/contact";

const Location = ({ component }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <iframe
          className="w-full h-[50vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.2482481382!2d-75.68904862309185!3d45.42449687107335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0506ec00c2bb%3A0xfc4e6e2329cb985f!2sTabaret%2C%2075%20Laurier%20Ave%20E%2C%20Ottawa%2C%20ON%20K1N%206N6!5e0!3m2!1sen!2sca!4v1686432209569!5m2!1sen!2sca"
          height="250"
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {component}
    </div>
  );
};

export default Location;
