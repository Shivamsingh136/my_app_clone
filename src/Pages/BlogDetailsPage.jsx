import React from "react";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import BlogDetails from "../components/BlogDetails";
import HeaderTwo from "../components/HeaderTwo";
import HeaderThree from "../components/HeaderThree";
const BlogDetailsPage = () => {
  return (
    <>

      <HeaderTwo/>
      <HeaderThree/>
      {/* BlogDetails */}
      <BlogDetails />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default BlogDetailsPage;
