import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
const PayPal = ({ processPayment, validate }) => {
  const router = useRouter();
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AWjRypuXoSa2dmKS3LvJjNxmjSZswgLhuJks6DxVBU-p04w3EGJCpFor0lRxbJweeKMX9g4KLHafRMas",
      }}
    >
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={() => {
          console.log("clicked");
          validate();
        }}
        onApprove={(data, actions) => {
          console.log(data, actions);
          // You can handle other successful payment logic here
          router.push("/booking"); // redirect to success page
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPal;
