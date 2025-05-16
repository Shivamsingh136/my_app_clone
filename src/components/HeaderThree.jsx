import React from "react";
import { Link } from "react-router-dom";
// import logo from './/images/logo/logo.png'

function HeaderThree() {
  return (
    <header className="header bg-white border-bottom border-gray-100 false">
      <div className="container container-lg">
        <nav className="header-inner d-flex justify-content-between gap-8">
          <div className="flex-align menu-category-wrapper">
            <div className="category on-hover-item">
              <button
                type="button"
                className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading"
                fdprocessedid="awd7wu"
              >
                <span className="icon text-2xl d-xs-flex d-none">
                  <i className="ph ph-dots-nine"></i>
                </span>
                <span className="d-sm-flex d-none">All</span> Categories
                <span className="arrow-icon text-xl d-flex">
                  <i className="ph ph-caret-down"></i>
                </span>
              </button>
              <div className="responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper false">
                <button
                  type="button"
                  className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                >
                  <i className="ph ph-x"></i>
                </button>
                <div className="logo px-16 d-lg-none d-block">
                  <Link className="link" to="/">
                    <img src="/images/logo/logo.png" alt="Logo" />
                  </Link>
                </div>
                <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                  <li className="has-submenus-submenu">
                    <Link
                      className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      to="/"
                    >
                      <span className="text-xl d-flex">
                        <i className="ph ph-carrot"></i>
                      </span>
                      <span>Vegetables &amp; Fruit</span>
                      <span className="icon text-md d-flex ms-auto">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                    <div className="submenus-submenu py-16">
                      <h6 className="text-lg px-16 submenus-submenu__title">
                        Vegetables &amp; Fruit
                      </h6>
                      <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                        <li>
                          <Link to="/shop">Potato &amp; Tomato 000</Link>
                        </li>
                        <li>
                          <Link to="/shop">Cucumber &amp; Capsicum</Link>
                        </li>
                        <li>
                          <Link to="/shop">Leafy Vegetables</Link>
                        </li>
                        <li>
                          <Link to="/shop">Root Vegetables</Link>
                        </li>
                        <li>
                          <Link to="/shop">Beans &amp; Okra</Link>
                        </li>
                        <li>
                          <Link to="/shop">Cabbage &amp; Cauliflower</Link>
                        </li>
                        <li>
                          <Link to="/shop">Gourd &amp; Drumstick</Link>
                        </li>
                        <li>
                          <Link to="/shop">Specialty</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-submenus-submenu">
                    <Link
                      className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      to="/"
                    >
                      <span className="text-xl d-flex">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Beverages</span>
                      <span className="icon text-md d-flex ms-auto">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                    <div className="submenus-submenu py-16">
                      <h6 className="text-lg px-16 submenus-submenu__title">
                        Beverages
                      </h6>
                      <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                        <li>
                          <Link to="/shop">Soda &amp; Cocktail Mix </Link>
                        </li>
                        <li>
                          <Link to="/shop"> Sports &amp; Energy Drinks</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Non Alcoholic Drinks</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Packaged Water </Link>
                        </li>
                        <li>
                          <Link to="/shop"> Spring Water</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Flavoured Water </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-submenus-submenu">
                    <Link
                      className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      to="/"
                    >
                      <span className="text-xl d-flex">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Meats &amp; Seafood</span>
                      <span className="icon text-md d-flex ms-auto">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                    <div className="submenus-submenu py-16">
                      <h6 className="text-lg px-16 submenus-submenu__title">
                        Meats &amp; Seafood
                      </h6>
                      <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                        <li>
                          <Link to="/shop"> Fresh Meat </Link>
                        </li>
                        <li>
                          <Link to="/shop"> Frozen Meat</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Marinated Meat</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Fresh &amp; Frozen Meat</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-submenus-submenu">
                    <Link
                      className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      to="/"
                    >
                      <span className="text-xl d-flex">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Breakfast &amp; Dairy</span>
                      <span className="icon text-md d-flex ms-auto">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                    <div className="submenus-submenu py-16">
                      <h6 className="text-lg px-16 submenus-submenu__title">
                        Breakfast &amp; Dairy
                      </h6>
                      <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                        <li>
                          <Link to="/shop"> Oats &amp; Porridge</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Kids Cereal</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Muesli</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Flakes</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Granola &amp; Cereal Bars</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Instant Noodles</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-submenus-submenu">
                    <Link
                      className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      to="/"
                    >
                      <span className="text-xl d-flex">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Frozen Foods</span>
                      <span className="icon text-md d-flex ms-auto">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                    <div className="submenus-submenu py-16">
                      <h6 className="text-lg px-16 submenus-submenu__title">
                        Frozen Foods
                      </h6>
                      <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                        <li>
                          <Link to="/shop"> Instant Noodles </Link>
                        </li>
                        <li>
                          <Link to="/shop"> Hakka Noodles</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Cup Noodles</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Vermicelli</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Instant Pasta</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-submenus-submenu">
                    <Link
                      className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      to="/"
                    >
                      <span className="text-xl d-flex">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Biscuits &amp; Snacks</span>
                      <span className="icon text-md d-flex ms-auto">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                    <div className="submenus-submenu py-16">
                      <h6 className="text-lg px-16 submenus-submenu__title">
                        Biscuits &amp; Snacks
                      </h6>
                      <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                        <li>
                          <Link to="/shop"> Salted Biscuits </Link>
                        </li>
                        <li>
                          <Link to="/shop"> Marie, Health, Digestive</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Cream Biscuits &amp; Wafers </Link>
                        </li>
                        <li>
                          <Link to="/shop"> Glucose &amp; Milk biscuits</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Cookies</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-submenus-submenu">
                    <Link
                      className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      to="/"
                    >
                      <span className="text-xl d-flex">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Grocery &amp; Staples</span>
                      <span className="icon text-md d-flex ms-auto">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                    <div className="submenus-submenu py-16">
                      <h6 className="text-lg px-16 submenus-submenu__title">
                        Grocery &amp; Staples
                      </h6>
                      <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                        <li>
                          <Link to="/shop"> Lemon, Ginger &amp; Garlic </Link>
                        </li>
                        <li>
                          <Link to="/shop"> Indian &amp; Exotic Herbs</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Orangic Vegetables</Link>
                        </li>
                        <li>
                          <Link to="/shop">Orangic Fruits </Link>
                        </li>
                        <li>
                          <Link to="/shop"> Orangic Dry Fruits</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Orangic Dals &amp; pulses</Link>
                        </li>
                        <li>
                          <Link to="/shop"> Orangic Millet &amp; Flours</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-menu d-lg-block d-none">
              <ul className="nav-menu flex-align">
                <li className="on-hover-item nav-menu__item has-submenu">
                  <Link className="nav-menu__link" to="/">
                    Home
                  </Link>
                  <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        aria-current="page"
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                        to="/"
                      >
                        Home Grocery
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/"
                      >
                        Home Electronics
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/"
                      >
                        Home Fashion
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="on-hover-item nav-menu__item has-submenu">
                  <Link className="nav-menu__link" to="/">
                    Shop
                  </Link>
                  <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/shop"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/"
                      >
                        Shop Details
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/"
                      >
                        Shop Details Two
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="on-hover-item nav-menu__item has-submenu">
                  <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                    New
                  </span>
                  <Link className="nav-menu__link" to="/">
                    Pages
                  </Link>
                  <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/cart"
                      >
                        Cart
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/wishlist"
                      >
                        Wishlist
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/"
                      >
                        Checkout
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/become-seller"
                      >
                        Become Seller
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/account"
                      >
                        Account
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="on-hover-item nav-menu__item has-submenu">
                  <span className="badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4">
                    New
                  </span>
                  <Link className="nav-menu__link" to="/">
                    Vendors
                  </Link>
                  <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/vendor"
                      >
                        Vendors
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/vendor-details"
                      >
                        Vendor Details
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/vendor"
                      >
                        Vendors Two
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/vendor-details"
                      >
                        Vendors Two Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="on-hover-item nav-menu__item has-submenu">
                  <Link className="nav-menu__link" to="/">
                    Blog
                  </Link>
                  <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="common-dropdown__item nav-submenu__item">
                      <Link
                        className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                        to="/blog-details"
                      >
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu__item">
                  <Link className="nav-menu__link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-right flex-align">
            <Link
              className="bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
              to="/"
            >
              <div className="d-flex text-32">
                <i className="ph ph-phone-call"></i>
              </div>
              01- 234 567 890
            </Link>
            <div className="me-16 d-lg-none d-block">
              <div className="flex-align flex-wrap gap-12">
                <button
                  type="button"
                  className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                  fdprocessedid="egp5ep"
                >
                  <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                    <i className="ph ph-magnifying-glass"></i>
                  </span>
                </button>
                <Link className="flex-align gap-4 item-hover" to="/wishlist">
                  <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-heart"></i>
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                    Wishlist
                  </span>
                </Link>
                <Link className="flex-align gap-4 item-hover" to="/cart">
                  <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-shopping-cart-simple"></i>
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                    Cart
                  </span>
                </Link>
              </div>
            </div>
            <button
              type="button"
              className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
              fdprocessedid="lhnqpk"
            >
              <i className="ph ph-list"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderThree;
