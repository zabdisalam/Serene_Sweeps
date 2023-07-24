import React from "react";
import Pricing from "./pricing";
import pricings from "@/data/pricings.json";

const Pricings = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {pricings.map((pricing, index) => (
        <Pricing
          key={index}
          id={index}
          name={pricing.name}
          price={pricing.price}
          perks={pricing.perks}
        />
      ))}
    </div>
  );
};

export default Pricings;
