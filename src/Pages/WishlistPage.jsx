import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import WishListSection from "../components/WishListSection";
import ShippingOne from "../components/ShippingOne";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";

function WishlistPage() {
  return (
    <>
      

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      

      {/* WishListSection */}
      <WishListSection />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
}

export default WishlistPage;
