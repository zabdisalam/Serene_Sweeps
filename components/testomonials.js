import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import Testomonial from "./testomonial";
import testimonialData from "../data/testimonials.json";

const Testomonials = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
      {testimonialData.map((testimonial, index) => (
        <Testomonial
          key={index}
          avatar={testimonial.avatar}
          name={testimonial.name}
          role={testimonial.role}
          rating={testimonial.rating}
          comments={testimonial.comments}
        />
      ))}
    </div>
  );
};

export default Testomonials;
