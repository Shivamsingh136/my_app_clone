import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import ProductListOne from "../components/ProductListOne";


const CartPage = () => {



  return (
    <>
      

      {/* HeaderTwo */}
      <HeaderTwo category={true} />
      <ProductListOne/>

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default CartPage;
