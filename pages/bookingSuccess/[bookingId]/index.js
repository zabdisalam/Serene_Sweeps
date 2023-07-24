import { useRouter } from "next/router";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import Navbar from "@/components/layouts/Navbar";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

const BookingSuccess = () => {
  const router = useRouter();
  const { bookingId, ...formData } = router.query;
  console.log(formData);

  return (
    <div className="h-screen mt-32">
      <h1>Booking Success</h1>
      <p>Your booking ID is: {bookingId}</p>
    </div>
  );
};

BookingSuccess.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      {page}
      <Footer />
    </PrimaryLayout>
  );
};

export default BookingSuccess;
