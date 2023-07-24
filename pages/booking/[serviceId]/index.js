import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import staffData from "@/data/staff.json";
import pricingData from "@/data/pricings.json";
import Navbar from "@/components/layouts/Navbar";
import Header from "@/components/navigation/header";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Alert,
  TabPanel,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import Select from "react-select";
import { countries, getEmojiFlag } from "countries-list";
import { useRouter } from "next/router";
import Footer from "@/components/navigation/footer";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const formatCardNumber = (value) => {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
};

const formatExpires = (value) => {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).\*/g, "$1/$2");
};

const Booking = () => {
  const [type, setType] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpires, setCardExpires] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const errorFields = [
    "selectedService",
    "selectedStaff",
    "cardNumber",
    "cardExpires",
    "selectedCountry",
  ];

  const validateFields = () => {
    let errors = {};

    if (!selectedStaff) {
      errors.selectedStaff = "Please select a staff member";
    }

    if (!selectedService) {
      errors.selectedService = "Please select a service";
    }

    if (type === "card") {
      if (!cardNumber) {
        errors.cardNumber = "Card Number is required";
      }

      if (!cardExpires) {
        errors.cardExpires = "Card Expiry Date is required";
      }
    } else if (type === "paypal") {
      if (!selectedCountry) {
        errors.selectedCountry = "Please select a country";
      }
    }

    return errors;
  };

  useEffect(() => {
    const errors = validateFields();
    setErrors(errors);
    // if there are no errors, formIsValid will be true, otherwise false
    const formIsValid = Object.keys(errors).length === 0;
    setFormIsValid(formIsValid);
    console.log(
      cardNumber,
      cardExpires,
      selectedCountry,
      selectedService,
      selectedStaff,
      type
    );
    // When form is valid, save the data
    if (formIsValid) {
      const formData = {
        type,
        cardNumber,
        cardExpires,
        selectedCountry: selectedCountry?.value,
        selectedService: selectedService?.value,
        selectedStaff: selectedStaff?.value,
      };
      // Store form data in local storage
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [
    cardNumber,
    cardExpires,
    selectedCountry,
    selectedService,
    selectedStaff,
    formIsValid,
  ]);

  const router = useRouter();

  const { serviceId } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    const serviceIdIsNumber = !isNaN(serviceId);
    const validServiceId =
      serviceIdIsNumber && serviceId >= 1 && serviceId <= pricingData.length;

    if (validServiceId) {
      setSelectedService({
        value: pricingData[serviceId - 1].name,
        label: `${pricingData[serviceId - 1].perks[0]} $${
          pricingData[serviceId - 1].price
        }.99`,
      });
    } else {
      setSelectedService(null);
    }
  }, [router.isReady, serviceId]);

  const countryOptions = Object.entries(countries).map(
    ([countryCode, country]) => ({
      value: countryCode,
      label: `${getEmojiFlag(countryCode)} ${country.name}`,
    })
  );

  const handleSubmit = (formData) => {
    // Generate a booking ID. This could be a random number, a UUID, or something else.
    const bookingId = Math.random().toString(36).substring(2);

    // Navigate to the bookingSuccess page with form data as URL parameters
    router.push({
      pathname: `/bookingSuccess/${bookingId}`,
      query: formData,
    });
  };

  return (
    <div className="items-center justify-center flex flex-col min-h-screen bg-gray-100">
      <Card className="w-full max-w-[75rem]">
        <CardHeader
          color="blue"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
        >
          <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
            <BanknotesIcon className="h-10 w-10" />
          </div>
          <Typography variant="h4" color="white">
            BOOK NOW
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              <Tab value="card" onClick={() => setType("card")}>
                Pay with Card
              </Tab>
              <Tab value="paypal" onClick={() => setType("paypal")}>
                Pay with PayPal
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-visible"
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="card" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  {submitted &&
                    errorFields.map((field, i) => {
                      if (errors[field]) {
                        return (
                          <Alert color="red" variant="gradient" key={i}>
                            <span>{errors[field]}</span>
                          </Alert>
                        );
                      }
                      return null;
                    })}

                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Personal Details
                    </Typography>
                    <Input type="email" label="Email Address" />
                    <div className="my-4"></div>
                    <Input type="text" label="Full Name" />
                  </div>

                  <div className="my-6">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Card Details
                    </Typography>

                    <Input
                      label="Card Number"
                      maxLength={19}
                      value={formatCardNumber(cardNumber)}
                      onChange={(event) => setCardNumber(event.target.value)}
                      icon={
                        <CreditCardIcon className="h-5 w-5 text-blue-gray-300" />
                      }
                    />
                    <div className="my-4 flex items-center gap-4">
                      <Input
                        label="Expires"
                        maxLength={5}
                        value={formatExpires(cardExpires)}
                        onChange={(event) => setCardExpires(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                      />
                      <Input
                        label="CVC"
                        maxLength={4}
                        containerProps={{ className: "min-w-[72px]" }}
                      />
                    </div>
                    <Input label="Holder Name" />
                  </div>

                  <div className="mt-6">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Service
                    </Typography>
                    <Select
                      options={pricingData.map(({ name, perks, price }) => ({
                        value: name,
                        label: `${perks[0]} $${price}.99`,
                      }))}
                      value={selectedService}
                      onChange={(option) => setSelectedService(option)}
                    />
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Staff
                    </Typography>

                    <Select
                      options={staffData.map((staff) => ({
                        value: staff.name,
                        label: staff.name,
                      }))}
                      value={selectedStaff}
                      onChange={setSelectedStaff}
                    />
                  </div>
                  <Button
                    size="lg"
                    onClick={() => {
                      const formData = JSON.parse(
                        localStorage.getItem("formData")
                      );
                      localStorage.removeItem("formData");
                      const errors = validateFields();
                      if (Object.keys(errors).length === 0) {
                        handleSubmit(formData);
                      }
                      setSubmitted(true);
                    }}
                  >
                    Pay Now
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
              <TabPanel value="paypal" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  {submitted &&
                    errorFields.map((field, i) => {
                      if (errors[field]) {
                        return (
                          <Alert color="red" variant="gradient" key={i}>
                            <span>{errors[field]}</span>
                          </Alert>
                        );
                      }
                      return null;
                    })}

                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Personal Details
                    </Typography>
                    <Input type="email" label="Email Address" />
                    <div className="my-4"></div>
                    <Input type="text" label="Full Name" />
                  </div>

                  <div className="my-6">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Billing Address
                    </Typography>

                    <Select
                      options={countryOptions}
                      value={selectedCountry}
                      onChange={setSelectedCountry}
                    />
                    <Input
                      label="Postal Code"
                      containerProps={{ className: "mt-4" }}
                    />
                  </div>

                  <div className="mt-6">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Service
                    </Typography>

                    <Select
                      options={pricingData.map(({ name, perks, price }) => ({
                        value: name,
                        label: `${perks[0]} $${price}.99`,
                      }))}
                      value={selectedService}
                      onChange={setSelectedService}
                    />
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Staff
                    </Typography>

                    <Select
                      options={staffData.map((staff) => ({
                        value: staff.name,
                        label: staff.name,
                      }))}
                      value={selectedStaff}
                      onChange={setSelectedStaff}
                    />
                  </div>
                  <div className="ml-56 min-w-full">
                    <PayPalScriptProvider
                      options={{
                        "client-id":
                          "AWjRypuXoSa2dmKS3LvJjNxmjSZswgLhuJks6DxVBU-p04w3EGJCpFor0lRxbJweeKMX9g4KLHafRMas",
                      }}
                    >
                      <PayPalButtons
                        disabled={!formIsValid} // disable the button if the form is not valid
                        style={{ layout: "horizontal" }}
                        createOrder={async (data, actions) => {
                          setSubmitted(true);
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: "0.01", // replace this with your service's price
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          console.log(data, actions);
                          const formData = JSON.parse(
                            localStorage.getItem("formData")
                          );
                          localStorage.removeItem("formData");
                          console.log(formData);
                          handleSubmit(formData); // redirect to success page
                        }}
                      />
                    </PayPalScriptProvider>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

Booking.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      <Header page="Booking" />
      {page}
      <Footer />
    </PrimaryLayout>
  );
};

export default Booking;
