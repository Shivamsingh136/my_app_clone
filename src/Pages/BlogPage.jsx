import React from "react";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Blog from "../components/Blog";
import HeaderThree from "../components/HeaderThree";
import HeaderTwo from "../components/HeaderTwo";
import HeaderTop from '../components/HeaderTop';


const BlogPage = () => {



  return (
    <>

      <HeaderTop/>
      <HeaderTwo/>
      <HeaderThree/>

      {/* Blog */}
      <Blog />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default BlogPage;
