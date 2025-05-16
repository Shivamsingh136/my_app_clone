import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Contact from "../components/Contact";
const ContactPage = () => {
  return (
    <>
      
      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      

      {/* Contact */}
      <Contact />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ContactPage;
