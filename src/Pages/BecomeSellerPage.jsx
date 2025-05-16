import React from "react";
import HeaderTwo from "../components/HeaderTwo";

import ShippingOne from "../components/ShippingOne";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import HeaderThree from "../components/HeaderThree";
import WhyBecomeSeller from '../components/WhyBecomeSeller';
const BecomeSellerPage = () => {
  return (
    <>
      

      {/* HeaderTwo */}
      <HeaderTwo category={true} />
      <HeaderThree />
      <WhyBecomeSeller/>

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default BecomeSellerPage;
