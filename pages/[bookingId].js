import { useRouter } from "next/router";

export default function BookingSuccess() {
  const router = useRouter();
  const { bookingId } = router.query;

  return (
    <div>
      <h1>Booking Success</h1>
      <p>Your booking ID is: {bookingId}</p>
    </div>
  );
}
