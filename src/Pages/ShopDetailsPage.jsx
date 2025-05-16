import React from "react";

import HeaderTwo from "../components/HeaderTwo";
import ShippingTwo from "../components/ShippingTwo";
import FooterTwo from "../components/FooterTwo";
import VendorsList from "../components/VendorsList";

const ShopDetailsPage = () => {

  return (
    <>
      

      {/* HeaderOne */}
      <HeaderTwo category={true} />

      <VendorsList/>

      {/* ShippingTwo */}
      <ShippingTwo />

      {/* FooterTwo */}
      <FooterTwo />


    </>
  );
};

export default ShopDetailsPage;
