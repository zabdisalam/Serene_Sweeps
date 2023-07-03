import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

const Testomonial = ({ avatar, name, role, rating, comments }) => {
  const numericRating = Number(rating);
  const isValidRating =
    !isNaN(numericRating) && numericRating >= 1 && numericRating <= 5;

  return (
    <Card
      color="transparent"
      shadow={true}
      className="w-full max-w-[26rem] p-5 m-5"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar size="lg" variant="circular" src={avatar} alt={name} />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {name}
            </Typography>
            {isValidRating && (
              <div className="5 flex items-center gap-0">
                {Array.from({ length: numericRating }).map((_, index) => (
                  <StarIcon key={index} className="h-5 w-5 text-yellow-700" />
                ))}
              </div>
            )}
          </div>
          <Typography color="blue-gray">{role}</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>&quot;{comments}&quot;</Typography>
      </CardBody>
    </Card>
  );
};

export default Testomonial;
