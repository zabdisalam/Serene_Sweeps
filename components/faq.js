import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FAQData from "@/data/faq.json";

const Icon = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {FAQData.map((faq) => (
        <Accordion
          key={faq.id}
          open={open === faq.id}
          icon={<Icon id={faq.id} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(faq.id)}>
            {faq.question}
          </AccordionHeader>
          <AccordionBody>{faq.answer}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default Faq;
