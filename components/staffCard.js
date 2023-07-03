import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const StaffCard = ({ service, image, name, description }) => {
  return (
    <Card className="flex-row w-full max-w-[48rem]">
      <CardHeader
        shadow={true}
        floated={false}
        className="w-2/5 shrink-0 m-0 rounded-r-none"
      >
        <img src={image} alt="image" className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue" className="uppercase mb-4">
          {service}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="gray" className="font-normal mb-8">
          {description}
        </Typography>
        <a href="/booking" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Book
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default StaffCard;
