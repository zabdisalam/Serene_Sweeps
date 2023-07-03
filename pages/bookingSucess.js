import { useRouter } from "next/router";

const BookingSuccess = () => {
  const router = useRouter();

  const {
    type,
    cardNumber,
    cardExpires,
    selectedCountry,
    selectedService,
    selectedStaff,
  } = router.query;

  return (
    <div>
      <h1>Booking Success</h1>
      {/* Display the form data */}
      <p>Type: {type}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Expires: {cardExpires}</p>
      <p>Selected Country: {selectedCountry}</p>
      <p>Selected Service: {selectedService}</p>
      <p>Selected Staff: {selectedStaff}</p>
      {/* ... other code ... */}
    </div>
  );
};

BookingSuccess.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      <Header page="Booking Success" />
      {page}
    </PrimaryLayout>
  );
};

export default BookingSuccess;
