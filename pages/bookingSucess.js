import { useRouter } from "next/router";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

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
      {cardNumber && <p>Card Number: {cardNumber}</p>}
      {cardExpires && <p>Card Expires: {cardExpires}</p>}
      {selectedCountry && <p>Selected Country: {selectedCountry}</p>}
      {selectedService && <p>Selected Service: {selectedService}</p>}
      {selectedStaff && <p>Selected Staff: {selectedStaff}</p>}
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
      <Footer />
    </PrimaryLayout>
  );
};

export default BookingSuccess;
