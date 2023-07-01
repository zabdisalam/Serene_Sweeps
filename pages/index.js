import NavigationBar from "../components/layouts/Navbar.js";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </>
  );
};

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <NavigationBar />
      {page}
    </PrimaryLayout>
  );
};

export default Home;
