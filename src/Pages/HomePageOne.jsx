import React from "react";
import HeaderOne from '../components/HeaderOne';
import HeaderTwo from '../components/HeaderTwo';
import HeaderThree from '../components/HeaderThree';
import NewsletterOne from '../components/NewsletterOne';
import BottomFooter from '../components/BottomFooter';
import FooterOne from "../components/FooterOne";
import ShippingOne from '../components/ShippingOne';
import DeliveryOne from '../components/DeliveryOne';
import TopVendorsOne from '../components/TopVendorsOne';
import RecommendedOne from "../components/RecommendedOne";
import OfferOne from '../components/OfferOne';
import ProductListOne from "../components/ProductListOne";
import PromotionalOne from "../components/PromotionalOne";


const HomePage = () => {



  return (
    <>
           
      <HeaderOne/>
      <HeaderTwo/>
      <HeaderThree/>
      <PromotionalOne/>
      <ProductListOne/>
      <OfferOne/>
      <RecommendedOne/>
      <TopVendorsOne/>
      <DeliveryOne/>
      <ShippingOne/>
      <NewsletterOne/>
      <FooterOne/>
      <BottomFooter/>
    </>
  );
};

export default HomePage;
