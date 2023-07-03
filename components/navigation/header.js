import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ page }) => {
  return (
    <div className="expand">
      <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center">
        {page == "Home" ? (
          <>
            <Typography variant="h2" color="white">
              Transforming Houses into Immaculate Homes
            </Typography>
            <Button
              variant="gradient"
              size="lg"
              className="hidden lg:inline-block mt-4"
            >
              <Link href="/booking" legacyBehavior>
                <a>
                  <span>Book Now</span>
                </a>
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h2" color="white">
              {page}
            </Typography>
          </>
        )}
      </div>
      <div className="relative bg-img">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="nature image"
        />
      </div>
    </div>
  );
};

export default Header;
