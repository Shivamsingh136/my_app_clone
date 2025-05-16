import { Route, Routes } from "react-router-dom";
import HomePageOne from "./Pages/HomePageOne";
import AccountPage from "./Pages/AccountPage";
import BecomeSellerPage from "./Pages/BecomeSellerPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import ContactPage from "./Pages/ContactPage";
import ShopPage from "./Pages/ShopPage";
import BlogPage from "./Pages/BlogPage";
import WishlistPage from "./Pages/WishlistPage";
import CartPage from "./Pages/CartPage";
import VendorPage from "./Pages/VendorPage";
import VendorDetailsPage from "./Pages/VendorDetailsPage";
import ShopDetailsPage from "./Pages/ShopDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageOne />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/become-seller" element={<BecomeSellerPage />} />
      <Route path="/blog-details" element={<BlogDetailsPage />} />
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/shop-details" element={<ShopDetailsPage/>} />
      <Route path="/wishlist" element={<WishlistPage/>} />
      <Route path="cart" element={<CartPage/>} />
      <Route path="/vendor" element={<VendorPage/>} />
      <Route path="/vendor-details" element={<VendorDetailsPage/>} />
    </Routes>
  );
}

export default App;
