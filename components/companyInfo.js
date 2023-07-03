import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const CompanyInfo = () => {
  return (
    <div className="col-lg-6 info-container ml-32">
      <div className="my-10">
        <Typography variant="h2">Location</Typography>
        <div className="flex space-x-2 mb-5 mt-2">
          <BuildingOfficeIcon className="w-6 h-6" />
          <Typography>75 Laurier Ave E, Ottawa, ON K1N 6N5</Typography>
        </div>
        <div className="flex space-x-2 mb-5">
          <PhoneIcon className="w-6 h-6" />
          <Typography>1-800-908-809</Typography>
        </div>
        <div className="flex space-x-2 mb-5">
          <EnvelopeIcon className="w-6 h-6" />
          <Typography>owner@rhub.ca</Typography>
        </div>
      </div>

      <div>
        <Typography variant="h2" className="pb-5">
          Opening Hours
        </Typography>
        <Typography variant="h4">Weekdays</Typography>
        <Typography variant="body1">9:00 AM - 5:00 PM</Typography>
        <Typography variant="h4">Weekends</Typography>
        <Typography variant="body1">10:00 AM - 4:00 PM</Typography>
      </div>
    </div>
  );
};

export default CompanyInfo;
