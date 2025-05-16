import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="root">
      <div></div>
      <div className="overlay"></div>
      <div className="side-overlay false"></div>
      <form action="#" className="search-box false">
        <button
          type="button"
          className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
        >
          <i className="ph ph-x"></i>
        </button>
        <div className="container">
          <div className="position-relative">
            <input
              type="text"
              className="form-control py-16 px-24 text-xl rounded-pill pe-64"
              placeholder="Search for a product or brand"
            />
            <button
              type="submit"
              className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
            >
              <i className="ph ph-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </form>
      <div className="mobile-menu scroll-sm d-lg-none d-block false">
        <button type="button" className="close-button" fdprocessedid="pbjzzy">
          <i className="ph ph-x"></i>
        </button>
        <div className="mobile-menu__inner">
          <Link className="mobile-menu__logo" href="/">
            <img src="/images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            <ul className="nav-menu flex-align nav-menu--mobile">
              <li className="on-hover-item nav-menu__item has-submenu">
                <Link className="nav-menu__link" href="/">
                  Home
                </Link>
                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/"
                    >
                      Home Grocery
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/index-two"
                    >
                      Home Electronics
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/index-three"
                    >
                      Home Fashion
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="on-hover-item nav-menu__item has-submenu">
                <Link className="nav-menu__link" href="/">
                  Shop
                </Link>
                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/shop.html"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/product-details"
                    >
                      Shop Details
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/product-details-two"
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
                <Link className="nav-menu__link" href="/">
                  Pages
                </Link>
                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/cart.html"
                    >
                      Cart
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/cart.html"
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/checkout"
                    >
                      Checkout
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/become-seller"
                    >
                      Become Seller
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      to="/my-account"
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
                <Link className="nav-menu__link" href="/">
                  Vendors
                </Link>
                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/vendor"
                    >
                      Vendors
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/vendor-details"
                    >
                      Vendor Details
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/vendor-two"
                    >
                      Vendors Two
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/vendor-two-details"
                    >
                      Vendors Two Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="on-hover-item nav-menu__item has-submenu">
                <Link className="nav-menu__link" href="/">
                  Blog
                </Link>
                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      href="/blog-details"
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item">
                <Link className="nav-menu__link" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-top bg-main-600 flex-between">
        <div className="container container-lg">
          <div className="flex-between flex-wrap gap-8">
            <ul className="flex-align flex-wrap d-none d-md-flex">
              <li className="border-right-item">
                <Link
                  className="text-white text-sm hover-text-decoration-underline"
                  href="/"
                >
                  Become A Seller
                </Link>
              </li>
              <li className="border-right-item">
                <Link
                  className="text-white text-sm hover-text-decoration-underline"
                  href="/"
                >
                  About us
                </Link>
              </li>
              <li className="border-right-item">
                <Link
                  className="text-white text-sm hover-text-decoration-underline"
                  href="/"
                >
                  Free Delivery
                </Link>
              </li>
              <li className="border-right-item">
                <Link
                  className="text-white text-sm hover-text-decoration-underline"
                  href="/"
                >
                  Returns Policy
                </Link>
              </li>
            </ul>
            <ul className="header-top__right flex-align flex-wrap">
              <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                <Link className="text-white text-sm py-8" href="/">
                  Help Center
                </Link>
                <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                  <li className="nav-submenu__item">
                    <Link
                      className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <span className="text-sm d-flex">
                        <i className="ph ph-headset"></i>
                      </span>
                      Call Center
                    </Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link
                      className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <span className="text-sm d-flex">
                        <i className="ph ph-chat-circle-dots"></i>
                      </span>
                      Live Chat
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                <Link className="selected-text text-white text-sm py-8" href="/">
                  Eng
                </Link>
                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag1.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      English
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag2.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Japan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag3.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      French
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag4.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Germany
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag6.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Bangladesh
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag5.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      South Korea
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                <Link className="selected-text text-white text-sm py-8" href="/">
                  USD
                </Link>
                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag1.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      USD
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag2.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Yen
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag3.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Franc
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag4.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      EURO
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag6.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      BDT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      href="/"
                    >
                      <img
                        src="/images/thumbs/flag5.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      WON
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="border-right-item">
                <Link
                  className="text-white text-sm py-8 flex-align gap-6"
                  to="/my-account"
                >
                  <span className="icon text-md d-flex">
                    <i className="ph ph-user-circle"></i>{" "}
                  </span>
                  <span className="hover-text-decoration-underline">
                    My Account
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="header-middle bg-color-one border-bottom border-gray-100">
        <div className="container container-lg">
          <nav className="header-inner flex-between">
            <div className="logo">
              <Link className="link" href="/">
                <img src="/images/logo/logo.png" alt="Logo" />
              </Link>
            </div>
            <form action="#" className="flex-align flex-wrap form-location-wrapper">
              <div className="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none">
                <select
                  className="js-example-basic-single border border-gray-200 border-end-0 select2-hidden-accessible"
                  name="state"
                  data-select2-id="select2-data-1-lczh"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option
                    value="1"
                    selected=""
                    data-select2-id="select2-data-3-d3gg"
                  >
                    All Categories
                  </option>
                  <option value="1">Grocery</option>
                  <option value="1">Breakfast &amp; Dairy</option>
                  <option value="1">Vegetables</option>
                  <option value="1">Milks and Dairies</option>
                  <option value="1">Pet Foods &amp; Toy</option>
                  <option value="1">Breads &amp; Bakery</option>
                  <option value="1">Fresh Seafood</option>
                  <option value="1">Fronzen Foods</option>
                  <option value="1">Noodles &amp; Rice</option>
                  <option value="1">Ice Cream</option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="select2-data-2-qr5r"
                  style={{width: '146px'}}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-state-dj-container"
                      aria-controls="select2-state-dj-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-state-dj-container"
                        role="textbox"
                        aria-readonly="true"
                        title="All Categories"
                      >
                        All Categories
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                </span>
                <div className="search-form__wrapper position-relative">
                  <input
                    type="text"
                    className="search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44"
                    placeholder="Search for a product or brand"
                    fdprocessedid="lvo4cq"
                  />
                  <button
                    type="submit"
                    className="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                    fdprocessedid="pptguo"
                  >
                    <i className="ph ph-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <div className="location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100">
                <span className="text-gray-900 text-xl d-xs-flex d-none">
                  <i className="ph ph-map-pin"></i>
                </span>
                <div className="line-height-1">
                  <span className="text-gray-600 text-xs">Your Location</span>
                  <div className="line-height-1">
                    <select
                      className="js-example-basic-single border border-gray-200 border-end-0 select2-hidden-accessible"
                      name="state"
                      data-select2-id="select2-data-4-43xr"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option
                        value="1"
                        selected=""
                        data-select2-id="select2-data-6-qvhm"
                      >
                        Alabama
                      </option>
                      <option value="1">Alaska</option>
                      <option value="1">Arizona</option>
                      <option value="1">Delaware</option>
                      <option value="1">Florida</option>
                      <option value="1">Georgia</option>
                      <option value="1">Hawaii</option>
                      <option value="1">Indiana</option>
                      <option value="1">Marzland</option>
                      <option value="1">Nevada</option>
                      <option value="1">New Jersey</option>
                      <option value="1">New Mexico</option>
                      <option value="1">New York</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-5-uar0"
                      style={{width: "109px"}}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-state-ff-container"
                          aria-controls="select2-state-ff-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-state-ff-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Alabama"
                          >
                            Alabama
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </div>
                </div>
              </div>
            </form>
            <div className="header-right flex-align d-lg-block d-none">
              <div className="flex-align flex-wrap gap-12">
                <button
                  type="button"
                  className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                >
                  <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                    <i className="ph ph-magnifying-glass"></i>
                  </span>
                </button>
                <Link className="flex-align gap-4 item-hover" href="/cart.html">
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
                <Link className="flex-align gap-4 item-hover" href="/cart.html">
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
          </nav>
        </div>
      </header>
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
                    <Link className="link" href="/">
                      <img src="/images/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        href="/"
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
                            <Link href="/shop.html">
                              Potato &amp; Tomato 000
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              Cucumber &amp; Capsicum
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Leafy Vegetables</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Root Vegetables</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Beans &amp; Okra</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              Cabbage &amp; Cauliflower
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Gourd &amp; Drumstick</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Specialty</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        href="/"
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
                            <Link href="/shop.html">
                              Soda &amp; Cocktail Mix{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              {" "}
                              Sports &amp; Energy Drinks
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Non Alcoholic Drinks</Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Packaged Water </Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Spring Water</Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Flavoured Water </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        href="/"
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
                            <Link href="/shop.html"> Fresh Meat </Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Frozen Meat</Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Marinated Meat</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              {" "}
                              Fresh &amp; Frozen Meat
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        href="/"
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
                            <Link href="/shop.html"> Oats &amp; Porridge</Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Kids Cereal</Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Muesli</Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Flakes</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              {" "}
                              Granola &amp; Cereal Bars
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Instant Noodles</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        href="/"
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
                            <Link href="/shop.html"> Instant Noodles </Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Hakka Noodles</Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Cup Noodles</Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Vermicelli</Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Instant Pasta</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        href="/"
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
                            <Link href="/shop.html"> Salted Biscuits </Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              {" "}
                              Marie, Health, Digestive
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              {" "}
                              Cream Biscuits &amp; Wafers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              {" "}
                              Glucose &amp; Milk biscuits
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Cookies</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        href="/"
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
                            <Link href="/shop.html">
                              {" "}
                              Lemon, Ginger &amp; Garlic{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              {" "}
                              Indian &amp; Exotic Herbs
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Orangic Vegetables</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Orangic Fruits </Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Orangic Dry Fruits</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              {" "}
                              Orangic Dals &amp; pulses
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop.html">
                              {" "}
                              Orangic Millet &amp; Flours
                            </Link>
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
                    <Link className="nav-menu__link" href="/">
                      Home
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          aria-current="page"
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                          href="/"
                        >
                          Home Grocery
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/index-two"
                        >
                          Home Electronics
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/index-three"
                        >
                          Home Fashion
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                    <Link className="nav-menu__link" href="/">
                      Shop
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/shop.html"
                        >
                          Shop
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/product-details"
                        >
                          Shop Details
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/product-details-two"
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
                    <Link className="nav-menu__link" href="/">
                      Pages
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/cart.html"
                        >
                          Cart
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/cart.html"
                        >
                          Wishlist
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/checkout"
                        >
                          Checkout
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/become-seller"
                        >
                          Become Seller
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          to="/my-account"
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
                    <Link className="nav-menu__link" href="/">
                      Vendors
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/vendor"
                        >
                          Vendors
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/vendor-details"
                        >
                          Vendor Details
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/vendor-two"
                        >
                          Vendors Two
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/vendor-two-details"
                        >
                          Vendors Two Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                    <Link className="nav-menu__link" href="/">
                      Blog
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/blog-details"
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-menu__item">
                    <Link className="nav-menu__link" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-right flex-align">
              <Link
                className="bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
                href="/"
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
                  <Link className="flex-align gap-4 item-hover" href="/cart.html">
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
                  <Link className="flex-align gap-4 item-hover" href="/cart.html">
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
      <div className="banner">
        <div className="container container-lg">
          <div className="banner-item rounded-24 overflow-hidden position-relative arrow-center">
            <Link
              href="#featureSection"
              className="scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800"
            >
              <span className="icon line-height-0">
                <i className="ph ph-caret-double-down"></i>
              </span>
            </Link>
            <img
              src="//images/bg/banner-bg.png"
              alt=""
              className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24"
            />
            <div className="flex-align"></div>
            <div className="banner-slider">
              <div className="slick-slider slick-initialized" dir="ltr">
                <button
                  type="button"
                  className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                  fdprocessedid="9odda"
                >
                  <i className="ph ph-caret-left"></i>
                </button>
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: "3700px",
                      opacity: 1,
                    //   transform: translate3d("-740px, 0px, 0px")
                    }}
                  >
                    <div
                      data-index="-1"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "740px"}}
                    >
                      <div>
                        <div
                          className="banner-slider__item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="banner-slider__inner flex-between position-relative">
                            <div className="banner-item__content">
                              <h1 className="banner-item__title">
                                Daily Grocery Order and Get Express Delivery
                              </h1>
                              <Link
                                className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                href="/shop.html"
                              >
                                Explore Shop
                                <span className="icon text-xl d-flex">
                                  <i className="ph ph-shopping-cart-simple"></i>{" "}
                                </span>
                              </Link>
                            </div>
                            <div className="banner-item__thumb">
                              <img
                                src="/images/thumbs/banner-img3.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "740px"}}
                    >
                      <div>
                        <div
                          className="banner-slider__item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="banner-slider__inner flex-between position-relative">
                            <div className="banner-item__content">
                              <h1 className="banner-item__title bounce">
                                Daily Grocery Order and Get Express Delivery
                              </h1>
                              <Link
                                className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                href="/shop.html"
                              >
                                Explore Shop
                                <span className="icon text-xl d-flex">
                                  <i className="ph ph-shopping-cart-simple"></i>{" "}
                                </span>
                              </Link>
                            </div>
                            <div className="banner-item__thumb">
                              <img
                                src="/images/thumbs/banner-img1.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="1"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "740px"}}
                    >
                      <div>
                        <div
                          className="banner-slider__item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="banner-slider__inner flex-between position-relative">
                            <div className="banner-item__content">
                              <h1 className="banner-item__title">
                                Daily Grocery Order and Get Express Delivery
                              </h1>
                              <Link
                                className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                href="/shop.html"
                              >
                                Explore Shop
                                <span className="icon text-xl d-flex">
                                  <i className="ph ph-shopping-cart-simple"></i>{" "}
                                </span>
                              </Link>
                            </div>
                            <div className="banner-item__thumb">
                              <img
                                src="/images/thumbs/banner-img3.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="2"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "740px"}}
                    >
                      <div>
                        <div
                          className="banner-slider__item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="banner-slider__inner flex-between position-relative">
                            <div className="banner-item__content">
                              <h1 className="banner-item__title bounce">
                                Daily Grocery Order and Get Express Delivery
                              </h1>
                              <Link
                                className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                href="/shop.html"
                              >
                                Explore Shop
                                <span className="icon text-xl d-flex">
                                  <i className="ph ph-shopping-cart-simple"></i>{" "}
                                </span>
                              </Link>
                            </div>
                            <div className="banner-item__thumb">
                              <img
                                src="/images/thumbs/banner-img1.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="3"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "740px"}}
                    >
                      <div>
                        <div
                          className="banner-slider__item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="banner-slider__inner flex-between position-relative">
                            <div className="banner-item__content">
                              <h1 className="banner-item__title">
                                Daily Grocery Order and Get Express Delivery
                              </h1>
                              <Link
                                className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                href="/shop.html"
                              >
                                Explore Shop
                                <span className="icon text-xl d-flex">
                                  <i className="ph ph-shopping-cart-simple"></i>{" "}
                                </span>
                              </Link>
                            </div>
                            <div className="banner-item__thumb">
                              <img
                                src="/images/thumbs/banner-img3.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                  fdprocessedid="o2wgt4"
                >
                  <i className="ph ph-caret-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature" id="featureSection">
        <div className="container container-lg">
          <div className="position-relative arrow-center">
            <div className="flex-align">
              <button
                type="button"
                id="feature-item-wrapper-prev"
                className="slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
              >
                <i className="ph ph-caret-left"></i>
              </button>
              <button
                type="button"
                id="feature-item-wrapper-next"
                className="slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
              >
                <i className="ph ph-caret-right"></i>
              </button>
            </div>
            <div className="feature-item-wrapper">
              <div className="slick-slider slick-initialized" dir="ltr">
                <button
                  type="button"
                  className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                >
                  <i className="ph ph-caret-left"></i>
                </button>
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: "4185px",
                      opacity: 1,
                    //   transform: translate3d("-775px, 0px, 0px")
                    }}
                    
                  >
                    <div
                      data-index="-5"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img7.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Yummy Candy
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="-4"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img2.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Fish &amp; Meats
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="-3"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img8.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Dairy &amp; Eggs
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="-2"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img9.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Snacks
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="-1"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img10.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Frozen Foods
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img1.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Vegetables
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="1"
                      className="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img2.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Fish &amp; Meats
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="2"
                      className="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img3.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Desserts
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="3"
                      className="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img4.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Drinks &amp; Juice
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="4"
                      className="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img5.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Animals Food
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="5"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img6.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Fresh Fruits
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="6"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img7.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Yummy Candy
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="7"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img2.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Fish &amp; Meats
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="8"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img8.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Dairy &amp; Eggs
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="9"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img9.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Snacks
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="10"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img10.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Frozen Foods
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="11"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img1.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Vegetables
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="12"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img2.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Fish &amp; Meats
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="13"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img3.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Desserts
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="14"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img4.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Drinks &amp; Juice
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="15"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img5.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Animals Food
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="16"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img6.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Fresh Fruits
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="17"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img7.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Yummy Candy
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="18"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img2.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Fish &amp; Meats
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="19"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img8.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Dairy &amp; Eggs
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="20"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img9.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Snacks
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="21"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "155px"}}
                    >
                      <div>
                        <div
                          className="feature-item text-center"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <div className="feature-item__thumb rounded-circle">
                            <Link
                              className="w-100 h-100 flex-center"
                              href="/shop.html"
                            >
                              <img
                                src="/images/thumbs/feature-img10.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="feature-item__content mt-16">
                            <h6 className="text-lg mb-8">
                              <Link className="text-inherit" href="/shop.html">
                                Frozen Foods
                              </Link>
                            </h6>
                            <span className="text-sm text-gray-400">
                              125+ Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                >
                  <i className="ph ph-caret-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="promotional-banner pt-80">
        <div className="container container-lg">
          <div className="row gy-4">
            <div className="col-xl-3 col-sm-6 col-xs-6">
              <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                <img
                  src="/images/thumbs/promotional-banner-img1.png"
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                />
                <div className="promotional-banner-item__content">
                  <h6 className="promotional-banner-item__title text-32">
                    Everyday Fresh Meat
                  </h6>
                  <Link
                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                    href="/shop.html"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6">
              <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                <img
                  src="/images/thumbs/promotional-banner-img2.png"
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                />
                <div className="promotional-banner-item__content">
                  <h6 className="promotional-banner-item__title text-32">
                    Daily Fresh Vegetables
                  </h6>
                  <Link
                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                    href="/shop.html"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6">
              <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                <img
                  src="/images/thumbs/promotional-banner-img3.png"
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                />
                <div className="promotional-banner-item__content">
                  <h6 className="promotional-banner-item__title text-32">
                    Everyday Fresh Milk
                  </h6>
                  <Link
                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                    href="/shop.html"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6">
              <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                <img
                  src="/images/thumbs/promotional-banner-img4.png"
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                />
                <div className="promotional-banner-item__content">
                  <h6 className="promotional-banner-item__title text-32">
                    Everyday Fresh Fruits
                  </h6>
                  <Link
                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                    href="/shop.html"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flash-sales pt-80">
        <div className="container container-lg">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Flash Sales Today</h5>
              <div className="flex-align gap-16 mr-point">
                <Link
                  className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                  href="/shop.html"
                >
                  View All Deals
                </Link>
              </div>
            </div>
          </div>
          <div className="flash-sales__slider arrow-style-two">
            <div className="slick-slider slick-initialized" dir="ltr">
              <button
                type="button"
                className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                fdprocessedid="drab7p"
              >
                <i className="ph ph-caret-left"></i>
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: "5404px",
                    opacity: 1,
                    // transform: translate3d("-772px, 0px, 0px")
                  }}
                >
                  <div
                    data-index="-1"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "772px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                          <img
                            src="/images/bg/flash-sale-bg2.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                          />
                          <div className="flash-sales-item__thumb d-sm-block d-none">
                            <img
                              src="/images/thumbs/flash-sale-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="flash-sales-item__content ms-sm-auto">
                            <h6 className="text-32 mb-20">Daily Snacks</h6>
                            <div className="countdown" id="countdown3">
                              <ul className="countdown-list flex-align flex-wrap">
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="days"></span>230 Days
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="hours"></span>4 Hours
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="minutes"></span>2 Min
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="seconds"></span>47 Sec
                                </li>
                              </ul>
                            </div>
                            <Link
                              className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                              href="/shop.html"
                            >
                              Shop Now
                              <span className="icon text-xl d-flex">
                                <i className="ph ph-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="0"
                    className="slick-slide slick-active slick-current"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline: "none", width: "772px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                          <img
                            src="/images/bg/flash-sale-bg1.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                          />
                          <div className="flash-sales-item__thumb d-sm-block d-none">
                            <img
                              src="/images/thumbs/flash-sale-img1.png"
                              alt=""
                            />
                          </div>
                          <div className="flash-sales-item__content ms-sm-auto">
                            <h6 className="text-32 mb-20">Fresh Vegetables</h6>
                            <div className="countdown" id="countdown1">
                              <ul className="countdown-list flex-align flex-wrap">
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="days"></span>230 Days
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="hours"></span>4 Hours
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="minutes"></span>2 Min
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="seconds"></span>47 Sec
                                </li>
                              </ul>
                            </div>
                            <Link
                              className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                              href="/shop.html"
                            >
                              Shop Now
                              <span className="icon text-xl d-flex">
                                <i className="ph ph-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "772px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                          <img
                            src="/images/bg/flash-sale-bg2.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                          />
                          <div className="flash-sales-item__thumb d-sm-block d-none">
                            <img
                              src="/images/thumbs/flash-sale-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="flash-sales-item__content ms-sm-auto">
                            <h6 className="text-32 mb-20">Daily Snacks</h6>
                            <div className="countdown" id="countdown2">
                              <ul className="countdown-list flex-align flex-wrap">
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="days"></span>230 Days
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="hours"></span>4 Hours
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="minutes"></span>2 Min
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="seconds"></span>47 Sec
                                </li>
                              </ul>
                            </div>
                            <Link
                              className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                              href="/shop.html"
                            >
                              Shop Now
                              <span className="icon text-xl d-flex">
                                <i className="ph ph-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "772px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                          <img
                            src="/images/bg/flash-sale-bg2.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                          />
                          <div className="flash-sales-item__thumb d-sm-block d-none">
                            <img
                              src="/images/thumbs/flash-sale-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="flash-sales-item__content ms-sm-auto">
                            <h6 className="text-32 mb-20">Daily Snacks</h6>
                            <div className="countdown" id="countdown3">
                              <ul className="countdown-list flex-align flex-wrap">
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="days"></span>230 Days
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="hours"></span>4 Hours
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="minutes"></span>2 Min
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="seconds"></span>47 Sec
                                </li>
                              </ul>
                            </div>
                            <Link
                              className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                              href="/shop.html"
                            >
                              Shop Now
                              <span className="icon text-xl d-flex">
                                <i className="ph ph-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "772px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                          <img
                            src="/images/bg/flash-sale-bg1.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                          />
                          <div className="flash-sales-item__thumb d-sm-block d-none">
                            <img
                              src="/images/thumbs/flash-sale-img1.png"
                              alt=""
                            />
                          </div>
                          <div className="flash-sales-item__content ms-sm-auto">
                            <h6 className="text-32 mb-20">Fresh Vegetables</h6>
                            <div className="countdown" id="countdown1">
                              <ul className="countdown-list flex-align flex-wrap">
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="days"></span>230 Days
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="hours"></span>4 Hours
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="minutes"></span>2 Min
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="seconds"></span>47 Sec
                                </li>
                              </ul>
                            </div>
                            <Link
                              className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                              href="/shop.html"
                            >
                              Shop Now
                              <span className="icon text-xl d-flex">
                                <i className="ph ph-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "772px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                          <img
                            src="/images/bg/flash-sale-bg2.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                          />
                          <div className="flash-sales-item__thumb d-sm-block d-none">
                            <img
                              src="/images/thumbs/flash-sale-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="flash-sales-item__content ms-sm-auto">
                            <h6 className="text-32 mb-20">Daily Snacks</h6>
                            <div className="countdown" id="countdown2">
                              <ul className="countdown-list flex-align flex-wrap">
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="days"></span>230 Days
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="hours"></span>4 Hours
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="minutes"></span>2 Min
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="seconds"></span>47 Sec
                                </li>
                              </ul>
                            </div>
                            <Link
                              className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                              href="/shop.html"
                            >
                              Shop Now
                              <span className="icon text-xl d-flex">
                                <i className="ph ph-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="5"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "772px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                          <img
                            src="/images/bg/flash-sale-bg2.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                          />
                          <div className="flash-sales-item__thumb d-sm-block d-none">
                            <img
                              src="/images/thumbs/flash-sale-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="flash-sales-item__content ms-sm-auto">
                            <h6 className="text-32 mb-20">Daily Snacks</h6>
                            <div className="countdown" id="countdown3">
                              <ul className="countdown-list flex-align flex-wrap">
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="days"></span>230 Days
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="hours"></span>4 Hours
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="minutes"></span>2 Min
                                </li>
                                <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                  <span className="seconds"></span>47 Sec
                                </li>
                              </ul>
                            </div>
                            <Link
                              className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                              href="/shop.html"
                            >
                              Shop Now
                              <span className="icon text-xl d-flex">
                                <i className="ph ph-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                fdprocessedid="3kd96d"
              >
                <i className="ph ph-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="product mt-24">
        <div className="container container-lg">
          <div className="row gy-4 g-12">
            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
                  href="/cart.html"
                >
                  Add <i className="ph ph-shopping-cart"></i>
                </Link>
                <Link
                  className="product-card__thumb flex-center"
                  href="/product-details"
                >
                  <img src="/images/thumbs/product-img1.png" alt="" />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="product-card__price mb-16">
                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                      $28.99
                    </span>
                    <span className="text-heading text-md fw-semibold">
                      $14.99 <span className="text-gray-500 fw-normal">/Qty</span>
                    </span>
                  </div>
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-600">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star"></i>
                    </span>
                    <span className="text-xs fw-bold text-gray-600">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link className="link text-line-2" href="/product-details">
                      Taylor Farms Broccoli Florets Vegetables
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront"></i>
                    </span>
                    <span className="text-gray-500 text-xs">
                      By Lucky Supermarket
                    </span>
                  </div>
                  <div className="mt-12">
                    <div
                      className="progress w-100 bg-color-three rounded-pill h-4"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-main-600 rounded-pill"
                        style={{width: "35%"}}
                      ></div>
                    </div>
                    <span className="text-gray-900 text-xs fw-medium mt-8">
                      Sold: 18/35
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
                  href="/cart.html"
                >
                  Add <i className="ph ph-shopping-cart"></i>
                </Link>
                <Link
                  className="product-card__thumb flex-center"
                  href="/product-details"
                >
                  <img src="/images/thumbs/product-img2.png" alt="" />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="product-card__price mb-16">
                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                      $28.99
                    </span>
                    <span className="text-heading text-md fw-semibold">
                      $14.99 <span className="text-gray-500 fw-normal">/Qty</span>
                    </span>
                  </div>
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-600">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star"></i>
                    </span>
                    <span className="text-xs fw-bold text-gray-600">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link className="link text-line-2" href="/product-details">
                      Taylor Farms Broccoli Florets Vegetables
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront"></i>
                    </span>
                    <span className="text-gray-500 text-xs">
                      By Lucky Supermarket
                    </span>
                  </div>
                  <div className="mt-12">
                    <div
                      className="progress w-100 bg-color-three rounded-pill h-4"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-main-600 rounded-pill"
                        style={{width: "35%"}}
                      ></div>
                    </div>
                    <span className="text-gray-900 text-xs fw-medium mt-8">
                      Sold: 18/35
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
                  href="/cart.html"
                >
                  Add <i className="ph ph-shopping-cart"></i>
                </Link>
                <Link
                  className="product-card__thumb flex-center"
                  href="/product-details"
                >
                  <img src="/images/thumbs/product-img3.png" alt="" />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="product-card__price mb-16">
                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                      $28.99
                    </span>
                    <span className="text-heading text-md fw-semibold">
                      $14.99 <span className="text-gray-500 fw-normal">/Qty</span>
                    </span>
                  </div>
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-600">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star"></i>
                    </span>
                    <span className="text-xs fw-bold text-gray-600">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link className="link text-line-2" href="/product-details">
                      Taylor Farms Broccoli Florets Vegetables
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront"></i>
                    </span>
                    <span className="text-gray-500 text-xs">
                      By Lucky Supermarket
                    </span>
                  </div>
                  <div className="mt-12">
                    <div
                      className="progress w-100 bg-color-three rounded-pill h-4"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-main-600 rounded-pill"
                        style={{width: "35%"}}
                      ></div>
                    </div>
                    <span className="text-gray-900 text-xs fw-medium mt-8">
                      Sold: 18/35
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
                  href="/cart.html"
                >
                  Add <i className="ph ph-shopping-cart"></i>
                </Link>
                <Link
                  className="product-card__thumb flex-center"
                  href="/product-details"
                >
                  <img src="/images/thumbs/product-img1.png" alt="" />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="product-card__price mb-16">
                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                      $28.99
                    </span>
                    <span className="text-heading text-md fw-semibold">
                      $14.99 <span className="text-gray-500 fw-normal">/Qty</span>
                    </span>
                  </div>
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-600">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star"></i>
                    </span>
                    <span className="text-xs fw-bold text-gray-600">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link className="link text-line-2" href="/product-details">
                      Taylor Farms Broccoli Florets Vegetables
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront"></i>
                    </span>
                    <span className="text-gray-500 text-xs">
                      By Lucky Supermarket
                    </span>
                  </div>
                  <div className="mt-12">
                    <div
                      className="progress w-100 bg-color-three rounded-pill h-4"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-main-600 rounded-pill"
                        style={{width: "35%"}}
                      ></div>
                    </div>
                    <span className="text-gray-900 text-xs fw-medium mt-8">
                      Sold: 18/35
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
                  href="/cart.html"
                >
                  Add <i className="ph ph-shopping-cart"></i>
                </Link>
                <Link
                  className="product-card__thumb flex-center"
                  href="/product-details"
                >
                  <img src="/images/thumbs/product-img5.png" alt="" />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="product-card__price mb-16">
                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                      $28.99
                    </span>
                    <span className="text-heading text-md fw-semibold">
                      $14.99 <span className="text-gray-500 fw-normal">/Qty</span>
                    </span>
                  </div>
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-600">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star"></i>
                    </span>
                    <span className="text-xs fw-bold text-gray-600">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link className="link text-line-2" href="/product-details">
                      Taylor Farms Broccoli Florets Vegetables
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront"></i>
                    </span>
                    <span className="text-gray-500 text-xs">
                      By Lucky Supermarket
                    </span>
                  </div>
                  <div className="mt-12">
                    <div
                      className="progress w-100 bg-color-three rounded-pill h-4"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-main-600 rounded-pill"
                        style={{width: "35%"}}
                      ></div>
                    </div>
                    <span className="text-gray-900 text-xs fw-medium mt-8">
                      Sold: 18/35
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
                  href="/cart.html"
                >
                  Add <i className="ph ph-shopping-cart"></i>
                </Link>
                <Link
                  className="product-card__thumb flex-center"
                  href="/product-details"
                >
                  <img src="/images/thumbs/product-img6.png" alt="" />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="product-card__price mb-16">
                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                      $28.99
                    </span>
                    <span className="text-heading text-md fw-semibold">
                      $14.99 <span className="text-gray-500 fw-normal">/Qty</span>
                    </span>
                  </div>
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-600">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star"></i>
                    </span>
                    <span className="text-xs fw-bold text-gray-600">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link className="link text-line-2" href="/product-details">
                      Taylor Farms Broccoli Florets Vegetables
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront"></i>
                    </span>
                    <span className="text-gray-500 text-xs">
                      By Lucky Supermarket
                    </span>
                  </div>
                  <div className="mt-12">
                    <div
                      className="progress w-100 bg-color-three rounded-pill h-4"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-main-600 rounded-pill"
                        style={{width: "35%"}}
                      ></div>
                    </div>
                    <span className="text-gray-900 text-xs fw-medium mt-8">
                      Sold: 18/35
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="offer pt-80 pb-80">
        <div className="container container-lg">
          <div className="row gy-4">
            <div className="col-sm-6">
              <div className="offer-card position-relative rounded-16 bg-main-600 overflow-hidden p-16 flex-align gap-16 flex-wrap z-1">
                <img
                  src="/images/shape/offer-shape.png"
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
                />
                <div className="offer-card__thumb d-lg-block d-none">
                  <img src="/images/thumbs/offer-img1.png" alt="" />
                </div>
                <div className="py-xl-4">
                  <div className="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle">
                    <img src="/images/thumbs/offer-logo.png" alt="" />
                  </div>
                  <h4 className="text-white mb-8">$5 off your first order</h4>
                  <div className="flex-align gap-8">
                    <span className="text-sm text-white">Delivery by 6:15am</span>
                    <span className="text-sm text-main-two-600">expired Aug 5</span>
                  </div>
                  <Link
                    className="mt-16 btn bg-white hover-text-white hover-bg-main-800 text-heading fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                    tabindex="0"
                    href="/shop.html"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="offer-card position-relative rounded-16 bg-main-600 overflow-hidden p-16 flex-align gap-16 flex-wrap z-1">
                <img
                  src="/images/shape/offer-shape.png"
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
                />
                <div className="offer-card__thumb d-lg-block d-none">
                  <img src="/images/thumbs/offer-img2.png" alt="" />
                </div>
                <div className="py-xl-4">
                  <div className="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle">
                    <img src="/images/thumbs/offer-logo.png" alt="" />
                  </div>
                  <h4 className="text-white mb-8">$5 off your first order</h4>
                  <div className="flex-align gap-8">
                    <span className="text-sm text-white">Delivery by 6:15am</span>
                    <span className="text-sm text-main-two-600">expired Aug 5</span>
                  </div>
                  <Link
                    className="mt-16 btn bg-white hover-text-white hover-bg-main-800 text-heading fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                    tabindex="0"
                    href="/shop.html"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recommended">
        <div className="container container-lg">
          <div className="section-heading flex-between flex-wrap gap-16">
            <h5 className="mb-0">Recommended for you</h5>
            <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-all-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-all"
                  type="button"
                  role="tab"
                  aria-controls="pills-all"
                  aria-selected="true"
                  fdprocessedid="906o7s"
                >
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-grocery-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-grocery"
                  type="button"
                  role="tab"
                  aria-controls="pills-grocery"
                  aria-selected="false"
                  fdprocessedid="x0z2i"
                  tabindex="-1"
                >
                  Grocery
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-fruits-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-fruits"
                  type="button"
                  role="tab"
                  aria-controls="pills-fruits"
                  aria-selected="false"
                  fdprocessedid="ib01n"
                  tabindex="-1"
                >
                  Fruits
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-juices-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-juices"
                  type="button"
                  role="tab"
                  aria-controls="pills-juices"
                  aria-selected="false"
                  fdprocessedid="fosow"
                  tabindex="-1"
                >
                  Juices
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-vegetables-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-vegetables"
                  type="button"
                  role="tab"
                  aria-controls="pills-vegetables"
                  aria-selected="false"
                  fdprocessedid="chgm6q"
                  tabindex="-1"
                >
                  Vegetables
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-snacks-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-snacks"
                  type="button"
                  role="tab"
                  aria-controls="pills-snacks"
                  aria-selected="false"
                  fdprocessedid="ulqs6d"
                  tabindex="-1"
                >
                  Snacks
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-organic-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-organic"
                  type="button"
                  role="tab"
                  aria-controls="pills-organic"
                  aria-selected="false"
                  fdprocessedid="7xi7b"
                  tabindex="-1"
                >
                  Organic Foods
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
              tabindex="0"
            >
              <div className="row g-12">
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img7.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img8.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Marcel's Modern Pantry Almond Unsweetened
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img9.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          O Organics Milk, Whole, Vitamin D
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                      Best Sale
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img10.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Whole Grains and Seeds Organic Bread
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img11.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Lucerne Yogurt, Lowfat, Strawberry
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img12.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Nature Valley Whole Grain Oats and Honey Protein
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img13.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img14.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img15.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img16.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Good &amp; Gather Farmed Atlantic Salmon
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img17.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img18.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Tropicana 100% Juice, Orange, No Pulp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-grocery"
              role="tabpanel"
              aria-labelledby="pills-grocery-tab"
              tabindex="0"
            >
              <div className="row g-12">
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img7.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img8.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Marcel's Modern Pantry Almond Unsweetened
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img9.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          O Organics Milk, Whole, Vitamin D
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                      Best Sale
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img10.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Whole Grains and Seeds Organic Bread
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img11.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Lucerne Yogurt, Lowfat, Strawberry
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img12.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Nature Valley Whole Grain Oats and Honey Protein
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img13.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img14.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img15.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img16.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Good &amp; Gather Farmed Atlantic Salmon
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img17.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img18.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Tropicana 100% Juice, Orange, No Pulp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-fruits"
              role="tabpanel"
              aria-labelledby="pills-fruits-tab"
              tabindex="0"
            >
              <div className="row g-12">
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img7.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img8.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Marcel's Modern Pantry Almond Unsweetened
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img9.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          O Organics Milk, Whole, Vitamin D
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                      Best Sale
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img10.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Whole Grains and Seeds Organic Bread
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img11.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Lucerne Yogurt, Lowfat, Strawberry
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img12.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Nature Valley Whole Grain Oats and Honey Protein
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img13.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img14.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img15.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img16.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Good &amp; Gather Farmed Atlantic Salmon
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img17.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img18.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Tropicana 100% Juice, Orange, No Pulp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-juices"
              role="tabpanel"
              aria-labelledby="pills-juices-tab"
              tabindex="0"
            >
              <div className="row g-12">
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img7.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img8.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Marcel's Modern Pantry Almond Unsweetened
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img9.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          O Organics Milk, Whole, Vitamin D
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                      Best Sale
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img10.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Whole Grains and Seeds Organic Bread
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img11.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Lucerne Yogurt, Lowfat, Strawberry
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img12.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Nature Valley Whole Grain Oats and Honey Protein
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img13.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img14.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img15.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img16.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Good &amp; Gather Farmed Atlantic Salmon
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img17.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img18.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Tropicana 100% Juice, Orange, No Pulp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-vegetables"
              role="tabpanel"
              aria-labelledby="pills-vegetables-tab"
              tabindex="0"
            >
              <div className="row g-12">
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img7.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img8.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Marcel's Modern Pantry Almond Unsweetened
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img9.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          O Organics Milk, Whole, Vitamin D
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                      Best Sale
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img10.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Whole Grains and Seeds Organic Bread
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img11.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Lucerne Yogurt, Lowfat, Strawberry
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img12.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Nature Valley Whole Grain Oats and Honey Protein
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img13.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img14.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img15.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img16.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Good &amp; Gather Farmed Atlantic Salmon
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img17.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img18.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Tropicana 100% Juice, Orange, No Pulp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-snacks"
              role="tabpanel"
              aria-labelledby="pills-snacks-tab"
              tabindex="0"
            >
              <div className="row g-12">
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img7.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img8.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Marcel's Modern Pantry Almond Unsweetened
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img9.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          O Organics Milk, Whole, Vitamin D
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                      Best Sale
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img10.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Whole Grains and Seeds Organic Bread
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img11.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Lucerne Yogurt, Lowfat, Strawberry
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img12.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Nature Valley Whole Grain Oats and Honey Protein
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img13.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img14.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img15.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img16.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Good &amp; Gather Farmed Atlantic Salmon
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img17.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img18.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Tropicana 100% Juice, Orange, No Pulp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-organic"
              role="tabpanel"
              aria-labelledby="pills-organic-tab"
              tabindex="0"
            >
              <div className="row g-12">
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img7.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img8.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Marcel's Modern Pantry Almond Unsweetened
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img9.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          O Organics Milk, Whole, Vitamin D
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                      Best Sale
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img10.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Whole Grains and Seeds Organic Bread
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img11.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Lucerne Yogurt, Lowfat, Strawberry
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img12.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Nature Valley Whole Grain Oats and Honey Protein
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img13.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img14.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img15.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          C-500 Antioxidant Protect Dietary Supplement
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img16.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Good &amp; Gather Farmed Atlantic Salmon
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img17.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                      New
                    </span>
                    <Link
                      className="product-card__thumb flex-center"
                      href="/product-details"
                    >
                      <img src="/images/thumbs/product-img18.png" alt="" />
                    </Link>
                    <div className="product-card__content p-sm-2">
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Tropicana 100% Juice, Orange, No Pulp
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8">
                          <span className="text-heading text-md fw-semibold">
                            $14.99
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>{" "}
                          </span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            $28.99
                          </span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex">
                            <i className="ph-fill ph-star"></i>
                          </span>
                          <span className="text-xs fw-bold text-gray-600">
                            (17k)
                          </span>
                        </div>
                        <Link
                          className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                          href="/cart.html"
                        >
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hot-deals pt-80">
        <div className="container container-lg">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Hot Deals Todays</h5>
              <div className="flex-align mr-point gap-16">
                <Link
                  className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                  href="/shop.html"
                >
                  View All Deals
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-12">
            <div className="col-md-4">
              <div className="hot-deals position-relative rounded-16 bg-main-600 overflow-hidden p-28 z-1 text-center">
                <img
                  src="/images/shape/offer-shape.png"
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
                />
                <div className="hot-deals__thumb">
                  <img src="/images/thumbs/hot-deals-img.png" alt="" />
                </div>
                <div className="py-xl-4">
                  <h4 className="text-white mb-8">Fresh Vegetables</h4>
                  <div className="countdown my-32" id="countdown4">
                    <ul className="countdown-list flex-center flex-wrap">
                      <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                        <span className="days"></span>230 Days
                      </li>
                      <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                        <span className="hours"></span>4 Hours
                      </li>
                      <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                        <span className="minutes"></span>2 Min
                      </li>
                      <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                        <span className="seconds"></span>47 Sec
                      </li>
                    </ul>
                  </div>
                  <Link
                    className="mt-16 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                    tabindex="0"
                    href="/shop.html"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="hot-deals-slider arrow-style-two">
                <div className="slick-slider slick-initialized" dir="ltr">
                  <button
                    type="button"
                    className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                    fdprocessedid="gj00t"
                  >
                    <i className="ph ph-caret-left"></i>
                  </button>
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{
                        width: "3072px",
                        opacity: 1,
                        // transform: translate3d("-1024px, 0px, 0px")
                      }}
                    >
                      <div
                        data-index="-2"
                        tabindex="-1"
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                New
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img18.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    Tropicana 100% Juice, Orange, No Pulp
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="-1"
                        tabindex="-1"
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                Sale 50%
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img9.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    O Organics Milk, Whole, Vitamin D
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="0"
                        className="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style={{outline: "none", width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                Sale 50%
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img8.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    Marcel's Modern Pantry Almond Unsweetened
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="1"
                        className="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style={{outline: "none", width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                Sale 50%
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img9.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    O Organics Milk, Whole, Vitamin D
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="2"
                        className="slick-slide slick-active slick-current"
                        tabindex="-1"
                        aria-hidden="false"
                        style={{outline: "none", width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                Best Sale
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img10.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    Whole Grains and Seeds Organic Bread
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="3"
                        className="slick-slide slick-active"
                        tabindex="-1"
                        aria-hidden="false"
                        style={{outline: "none", width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                New
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img18.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    Tropicana 100% Juice, Orange, No Pulp
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="4"
                        className="slick-slide"
                        tabindex="-1"
                        aria-hidden="true"
                        style={{outline: "none", width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                Sale 50%
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img9.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    O Organics Milk, Whole, Vitamin D
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="5"
                        tabindex="-1"
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                Sale 50%
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img8.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    Marcel's Modern Pantry Almond Unsweetened
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="6"
                        tabindex="-1"
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                Sale 50%
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img9.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    O Organics Milk, Whole, Vitamin D
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="7"
                        tabindex="-1"
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                Best Sale
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img10.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    Whole Grains and Seeds Organic Bread
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="8"
                        tabindex="-1"
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                New
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img18.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    Tropicana 100% Juice, Orange, No Pulp
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="9"
                        tabindex="-1"
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{width: "256px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                Sale 50%
                              </span>
                              <Link
                                className="product-card__thumb flex-center"
                                href="/product-details"
                              >
                                <img
                                  src="/images/thumbs/product-img9.png"
                                  alt=""
                                />
                              </Link>
                              <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                  <Link
                                    className="link text-line-2"
                                    href="/product-details"
                                  >
                                    O Organics Milk, Whole, Vitamin D
                                  </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                  <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront"></i>
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                  </span>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold">
                                      $14.99
                                      <span className="text-gray-500 fw-normal">
                                        /Qty
                                      </span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                      $28.99
                                    </span>
                                  </div>
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">
                                      (17k)
                                    </span>
                                  </div>
                                  <Link
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    href="/cart.html"
                                  >
                                    Add To Cart
                                    <i className="ph ph-shopping-cart"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                    fdprocessedid="7kln3k"
                  >
                    <i className="ph ph-caret-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-vendors py-80">
        <div className="container container-lg">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Weekly Top Vendors</h5>
              <Link
                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                href="/shop.html"
              >
                All Vendors
              </Link>
            </div>
          </div>
          <div className="row gy-4 vendor-card-wrapper">
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="vendor-card text-center px-16 pb-24">
                <div className="">
                  <img
                    src="/images/thumbs/vendor-logo1.png"
                    alt=""
                    className="vendor-card__logo m-12"
                  />
                  <h6 className="title mt-32">Organic Market</h6>
                  <span className="text-heading text-sm d-block">
                    Delivery by 6:15am
                  </span>
                  <Link
                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                    href="/shop.html"
                  >
                    $5 off Snack &amp; Candy
                  </Link>
                </div>
                <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img1.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img2.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img3.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img4.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="vendor-card text-center px-16 pb-24">
                <div className="">
                  <img
                    src="/images/thumbs/vendor-logo2.png"
                    alt=""
                    className="vendor-card__logo m-12"
                  />
                  <h6 className="title mt-32">Safeway</h6>
                  <span className="text-heading text-sm d-block">
                    Delivery by 6:15am
                  </span>
                  <Link
                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                    href="/shop.html"
                  >
                    $5 off Snack &amp; Candy
                  </Link>
                </div>
                <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img1.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img2.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img3.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img4.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="vendor-card text-center px-16 pb-24">
                <div className="">
                  <img
                    src="/images/thumbs/vendor-logo3.png"
                    alt=""
                    className="vendor-card__logo m-12"
                  />
                  <h6 className="title mt-32">Food Max</h6>
                  <span className="text-heading text-sm d-block">
                    Delivery by 6:15am
                  </span>
                  <Link
                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                    href="/shop.html"
                  >
                    $5 off Snack &amp; Candy
                  </Link>
                </div>
                <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img1.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img2.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img3.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img4.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="vendor-card text-center px-16 pb-24">
                <div className="">
                  <img
                    src="/images/thumbs/vendor-logo4.png"
                    alt=""
                    className="vendor-card__logo m-12"
                  />
                  <h6 className="title mt-32">HRmart</h6>
                  <span className="text-heading text-sm d-block">
                    Delivery by 6:15am
                  </span>
                  <Link
                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                    href="/shop.html"
                  >
                    $5 off Snack &amp; Candy
                  </Link>
                </div>
                <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img1.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img2.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img3.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img4.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="vendor-card text-center px-16 pb-24">
                <div className="">
                  <img
                    src="/images/thumbs/vendor-logo5.png"
                    alt=""
                    className="vendor-card__logo m-12"
                  />
                  <h6 className="title mt-32">Lucky Supermarket</h6>
                  <span className="text-heading text-sm d-block">
                    Delivery by 6:15am
                  </span>
                  <Link
                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                    href="/shop.html"
                  >
                    $5 off Snack &amp; Candy
                  </Link>
                </div>
                <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img1.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img2.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img3.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img4.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="vendor-card text-center px-16 pb-24">
                <div className="">
                  <img
                    src="/images/thumbs/vendor-logo6.png"
                    alt=""
                    className="vendor-card__logo m-12"
                  />
                  <h6 className="title mt-32">Arico Farmer</h6>
                  <span className="text-heading text-sm d-block">
                    Delivery by 6:15am
                  </span>
                  <Link
                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                    href="/shop.html"
                  >
                    $5 off Snack &amp; Candy
                  </Link>
                </div>
                <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img1.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img2.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img3.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img4.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="vendor-card text-center px-16 pb-24">
                <div className="">
                  <img
                    src="/images/thumbs/vendor-logo7.png"
                    alt=""
                    className="vendor-card__logo m-12"
                  />
                  <h6 className="title mt-32">Farmer Market</h6>
                  <span className="text-heading text-sm d-block">
                    Delivery by 6:15am
                  </span>
                  <Link
                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                    href="/shop.html"
                  >
                    $5 off Snack &amp; Candy
                  </Link>
                </div>
                <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img1.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img2.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img3.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img4.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="vendor-card text-center px-16 pb-24">
                <div className="">
                  <img
                    src="/images/thumbs/vendor-logo8.png"
                    alt=""
                    className="vendor-card__logo m-12"
                  />
                  <h6 className="title mt-32">Foodsco</h6>
                  <span className="text-heading text-sm d-block">
                    Delivery by 6:15am
                  </span>
                  <Link
                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                    href="/shop.html"
                  >
                    $5 off Snack &amp; Candy
                  </Link>
                </div>
                <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img1.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img2.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img3.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img4.png" alt="" />
                  </div>
                  <div className="vendor-card__item bg-white rounded-circle flex-center">
                    <img src="/images/thumbs/vendor-img5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="best sells pb-80">
        <div className="container container-lg">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Daily Best Sells</h5>
            </div>
          </div>
          <div className="row g-12">
            <div className="col-xxl-8">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="product-card style-two h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 flex-align gap-16">
                    <div className="">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                        Sale 50%{" "}
                      </span>
                      <Link
                        className="product-card__thumb flex-center"
                        href="/product-details"
                      >
                        <img src="/images/thumbs/best-sell1.png" alt="" />
                      </Link>
                      <div className="countdown" id="countdown6">
                        <ul className="countdown-list style-three flex-align flex-wrap">
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="hours"></span>4 Hours
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="minutes"></span>2 Min
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="seconds"></span>47 Sec
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-card__content">
                      <div className="product-card__price mb-16">
                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                          $28.99
                        </span>
                        <span className="text-heading text-md fw-semibold">
                          $14.99
                          <span className="text-gray-500 fw-normal">/Qty</span>
                        </span>
                      </div>
                      <div className="flex-align gap-6">
                        <span className="text-xs fw-bold text-gray-600">4.8</span>
                        <span className="text-15 fw-bold text-warning-600 d-flex">
                          <i className="ph-fill ph-star"></i>
                        </span>
                        <span className="text-xs fw-bold text-gray-600">(17k)</span>
                      </div>
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Taylor Farms Broccoli Florets Vegetables
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="mt-12">
                        <div
                          className="progress w-100 bg-color-three rounded-pill h-4"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-main-600 rounded-pill"
                            style={{width: "35%"}}
                          ></div>
                        </div>
                        <span className="text-gray-900 text-xs fw-medium mt-8">
                          Sold: 18/35
                        </span>
                      </div>
                      <Link
                        className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                        href="/cart.html"
                      >
                        Add To Cart <i className="ph ph-shopping-cart"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-card style-two h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 flex-align gap-16">
                    <div className="">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                        Sale 50%{" "}
                      </span>
                      <Link
                        className="product-card__thumb flex-center"
                        href="/product-details"
                      >
                        <img src="/images/thumbs/best-sell2.png" alt="" />
                      </Link>
                      <div className="countdown" id="countdown7">
                        <ul className="countdown-list style-three flex-align flex-wrap">
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="hours"></span>4 Hours
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="minutes"></span>2 Min
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="seconds"></span>47 Sec
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-card__content">
                      <div className="product-card__price mb-16">
                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                          $28.99
                        </span>
                        <span className="text-heading text-md fw-semibold">
                          $14.99
                          <span className="text-gray-500 fw-normal">/Qty</span>
                        </span>
                      </div>
                      <div className="flex-align gap-6">
                        <span className="text-xs fw-bold text-gray-600">4.8</span>
                        <span className="text-15 fw-bold text-warning-600 d-flex">
                          <i className="ph-fill ph-star"></i>
                        </span>
                        <span className="text-xs fw-bold text-gray-600">(17k)</span>
                      </div>
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Taylor Farms Broccoli Florets Vegetables
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="mt-12">
                        <div
                          className="progress w-100 bg-color-three rounded-pill h-4"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-main-600 rounded-pill"
                            style={{width: "35%"}}
                          ></div>
                        </div>
                        <span className="text-gray-900 text-xs fw-medium mt-8">
                          Sold: 18/35
                        </span>
                      </div>
                      <Link
                        className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                        href="/cart.html"
                      >
                        Add To Cart <i className="ph ph-shopping-cart"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-card style-two h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 flex-align gap-16">
                    <div className="">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                        Sale 50%{" "}
                      </span>
                      <Link
                        className="product-card__thumb flex-center"
                        href="/product-details"
                      >
                        <img src="/images/thumbs/best-sell3.png" alt="" />
                      </Link>
                      <div className="countdown" id="countdown8">
                        <ul className="countdown-list style-three flex-align flex-wrap">
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="hours"></span>4 Hours
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="minutes"></span>2 Min
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="seconds"></span>47 Sec
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-card__content">
                      <div className="product-card__price mb-16">
                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                          $28.99
                        </span>
                        <span className="text-heading text-md fw-semibold">
                          $14.99
                          <span className="text-gray-500 fw-normal">/Qty</span>
                        </span>
                      </div>
                      <div className="flex-align gap-6">
                        <span className="text-xs fw-bold text-gray-600">4.8</span>
                        <span className="text-15 fw-bold text-warning-600 d-flex">
                          <i className="ph-fill ph-star"></i>
                        </span>
                        <span className="text-xs fw-bold text-gray-600">(17k)</span>
                      </div>
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Taylor Farms Broccoli Florets Vegetables
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="mt-12">
                        <div
                          className="progress w-100 bg-color-three rounded-pill h-4"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-main-600 rounded-pill"
                            style={{width: "35%"}}
                          ></div>
                        </div>
                        <span className="text-gray-900 text-xs fw-medium mt-8">
                          Sold: 18/35
                        </span>
                      </div>
                      <Link
                        className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                        href="/cart.html"
                      >
                        Add To Cart <i className="ph ph-shopping-cart"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-card style-two h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 flex-align gap-16">
                    <div className="">
                      <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                        Sale 50%{" "}
                      </span>
                      <Link
                        className="product-card__thumb flex-center"
                        href="/product-details"
                      >
                        <img src="/images/thumbs/best-sell4.png" alt="" />
                      </Link>
                      <div className="countdown" id="countdown9">
                        <ul className="countdown-list style-three flex-align flex-wrap">
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="hours"></span>4 Hours
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="minutes"></span>2 Min
                          </li>
                          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                            <span className="seconds"></span>47 Sec
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-card__content">
                      <div className="product-card__price mb-16">
                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                          $28.99
                        </span>
                        <span className="text-heading text-md fw-semibold">
                          $14.99
                          <span className="text-gray-500 fw-normal">/Qty</span>
                        </span>
                      </div>
                      <div className="flex-align gap-6">
                        <span className="text-xs fw-bold text-gray-600">4.8</span>
                        <span className="text-15 fw-bold text-warning-600 d-flex">
                          <i className="ph-fill ph-star"></i>
                        </span>
                        <span className="text-xs fw-bold text-gray-600">(17k)</span>
                      </div>
                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link className="link text-line-2" href="/product-details">
                          Taylor Farms Broccoli Florets Vegetables
                        </Link>
                      </h6>
                      <div className="flex-align gap-4">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront"></i>
                        </span>
                        <span className="text-gray-500 text-xs">
                          By Lucky Supermarket
                        </span>
                      </div>
                      <div className="mt-12">
                        <div
                          className="progress w-100 bg-color-three rounded-pill h-4"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-main-600 rounded-pill"
                            style={{width: "35%"}}
                          ></div>
                        </div>
                        <span className="text-gray-900 text-xs fw-medium mt-8">
                          Sold: 18/35
                        </span>
                      </div>
                      <Link
                        className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                        href="/cart.html"
                      >
                        Add To Cart <i className="ph ph-shopping-cart"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4">
              <div className="position-relative rounded-16 bg-light-purple overflow-hidden p-28 z-1 text-center">
                <div className="">
                  <img
                    src="/images/bg/special-snacks.png"
                    alt=""
                    className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img"
                  />
                  <div className="d-xxl-block d-none">
                    <img src="/images/thumbs/special-snacks-img.png" alt="" />
                  </div>
                </div>
                <div className="py-xl-4">
                  <h4 className="mb-8">Special Snacks</h4>
                  <div className="countdown my-32" id="countdown5">
                    <ul className="countdown-list style-two flex-center flex-wrap">
                      <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                        <span className="hours"></span>4 Hours
                      </li>
                      <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                        <span className="minutes"></span>2 Min
                      </li>
                      <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                        <span className="seconds"></span>47 Sec
                      </li>
                    </ul>
                  </div>
                  <Link
                    className="mt-16 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                    tabindex="0"
                    href="/shop.html"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="delivery-section">
        <div className="container container-lg">
          <div className="delivery position-relative rounded-16 bg-main-600 p-16 flex-align gap-16 flex-wrap z-1">
            <img
              src="/images/bg/delivery-bg.png"
              alt=""
              className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100"
            />
            <div className="row align-items-center">
              <div className="col-md-3 d-md-block d-none">
                <div className="delivery__man text-center">
                  <img src="/images/thumbs/delivery-man.png" alt="" />
                </div>
              </div>
              <div className="col-md-5 col-sm-7">
                <div className="text-center">
                  <h4 className="text-white mb-8">
                    We Delivery on Next Day from 10:00 AM to 08:00 PM
                  </h4>
                  <p className="text-white">For Orders starts from $100</p>
                  <Link
                    className="mt-16 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                    tabindex="0"
                    href="/shop.html"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-5 d-sm-block d-none">
                <img src="/images/thumbs/special-snacks-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="organic-food py-80">
        <div className="container container-lg">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Organic Food</h5>
              <div className="flex-align mr-point gap-16">
                <Link
                  className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                  href="/shop.html"
                >
                  All Categories
                </Link>
              </div>
            </div>
          </div>
          <div className="organic-food__slider arrow-style-two">
            <div className="slick-slider slick-initialized" dir="ltr">
              <button
                type="button"
                className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                fdprocessedid="ns0kjn"
              >
                <i className="ph ph-caret-left"></i>
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: "4386px",
                    opacity: 1,
                    // transform: translate3d("-1548px, 0px, 0px")
                }}
                >
                  <div
                    data-index="-3"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img24.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-2"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img25.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-1"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="0"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img20.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img22.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                    className="slick-slide slick-active slick-current"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img23.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                    className="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img24.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="5"
                    className="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img25.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="6"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="7"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img20.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="8"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="9"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img22.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="10"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img23.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="11"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img24.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="12"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img25.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="13"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                Taylor Farms Broccoli Florets Vegetables
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                fdprocessedid="rivukp"
              >
                <i className="ph ph-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="short-product">
        <div className="container container-lg">
          <div className="row gy-4">
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <div className="p-16 bg-main-50 rounded-16 mb-32">
                  <h6 className="underlined-line position-relative mb-0 pb-16 d-inline-block">
                    Featured Products
                  </h6>
                </div>
                <div className="short-product-list arrow-style-two">
                  <div className="slick-slider slick-initialized" dir="ltr">
                    <button
                      type="button"
                      className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                      fdprocessedid="eo99m"
                    >
                      <i className="ph ph-caret-left"></i>
                    </button>
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          width: "1700px",
                          opacity: 1,
                        //   transform: translate3d("-680px, 0px, 0px")
                        }}
                      >
                        <div
                          data-index="-1"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img2.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="0"
                          className="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style={{outline: "none", width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img2.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="1"
                          className="slick-slide slick-active slick-current"
                          tabindex="-1"
                          aria-hidden="false"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img2.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="2"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img2.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="3"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img2.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                      fdprocessedid="93paf8"
                    >
                      <i className="ph ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <div className="p-16 bg-main-50 rounded-16 mb-32">
                  <h6 className="underlined-line position-relative mb-0 pb-16 d-inline-block">
                    Top Selling Products
                  </h6>
                </div>
                <div className="short-product-list arrow-style-two">
                  <div className="slick-slider slick-initialized" dir="ltr">
                    <button
                      type="button"
                      className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                      fdprocessedid="jp5tyg"
                    >
                      <i className="ph ph-caret-left"></i>
                    </button>
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          width: "1700px",
                          opacity: 1,
                        //   transform: translate3d("-680px, 0px, 0px")
                        }}
                      >
                        <div
                          data-index="-1"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img5.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img6.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="0"
                          className="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style={{outline: "none", width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img5.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img6.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="1"
                          className="slick-slide slick-active slick-current"
                          tabindex="-1"
                          aria-hidden="false"
                          style={{outline: "none", width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img5.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img6.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="2"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img5.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img6.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="3"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img5.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img6.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                      fdprocessedid="mnr6n"
                    >
                      <i className="ph ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <div className="p-16 bg-main-50 rounded-16 mb-32">
                  <h6 className="underlined-line position-relative mb-0 pb-16 d-inline-block">
                    On-sale Products
                  </h6>
                </div>
                <div className="short-product-list arrow-style-two">
                  <div className="slick-slider slick-initialized" dir="ltr">
                    <button
                      type="button"
                      className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                      fdprocessedid="i7ujvk"
                    >
                      <i className="ph ph-caret-left"></i>
                    </button>
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          width: "1700px",
                          opacity: 1,
                        //   transform: translate3d("-680px, 0px, 0px")
                        }}
                      >
                        <div
                          data-index="-1"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img9.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="0"
                          className="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style={{outline: "none", width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img9.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="1"
                          className="slick-slide slick-active slick-current"
                          tabindex="-1"
                          aria-hidden="false"
                          style={{outline: "none", width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img9.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="2"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img9.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="3"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img9.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img4.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                      fdprocessedid="axe52q"
                    >
                      <i className="ph ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6">
              <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <div className="p-16 bg-main-50 rounded-16 mb-32">
                  <h6 className="underlined-line position-relative mb-0 pb-16 d-inline-block">
                    Top Rated Products
                  </h6>
                </div>
                <div className="short-product-list arrow-style-two">
                  <div className="slick-slider slick-initialized" dir="ltr">
                    <button
                      type="button"
                      className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                      fdprocessedid="jddrdh"
                    >
                      <i className="ph ph-caret-left"></i>
                    </button>
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          width: "1700px",
                          opacity: 1,
                        //   transform: translate3d("-680px, 0px, 0px")
                        }}
                        
                      >
                        <div
                          data-index="-1"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="0"
                          className="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style={{outline: "none", width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="1"
                          className="slick-slide slick-active slick-current"
                          tabindex="-1"
                          aria-hidden="false"
                          style={{outline: "none", width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="2"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="3"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{width: "340px"}}
                        >
                          <div>
                            <div
                              tabindex="-1"
                              style={{width: "100%", display: "inline-block"}}
                            >
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img1.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img7.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16 mb-40">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img3.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-align gap-16">
                                <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                                  <Link className="link" href="/product-details">
                                    <img
                                      src="/images/thumbs/short-product-img8.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-card__content mt-12">
                                  <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-500">
                                      4.8
                                    </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                      <i className="ph-fill ph-star"></i>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-500">
                                      (17k)
                                    </span>
                                  </div>
                                  <h6 className="title text-lg fw-semibold mt-8 mb-8">
                                    <Link
                                      className="link text-line-1"
                                      href="/product-details"
                                    >
                                      Taylor Farms Broccoli Florets Vegetables
                                    </Link>
                                  </h6>
                                  <div className="product-card__price flex-align gap-8">
                                    <span className="text-heading text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold d-block">
                                      $1500.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                      fdprocessedid="ygc0qs"
                    >
                      <i className="ph ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand py-80">
        <div className="container container-lg">
          <div className="brand-inner bg-color-one p-24 rounded-16">
            <div className="section-heading">
              <div className="flex-between flex-wrap gap-8">
                <h5 className="mb-0">Shop by Brands</h5>
                <div className="flex-align mr-point gap-16">
                  <Link
                    className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                    href="/shop.html"
                  >
                    View All Deals
                  </Link>
                </div>
              </div>
            </div>
            <div className="brand-slider arrow-style-two">
              <div className="slick-slider slick-initialized" dir="ltr">
                <button
                  type="button"
                  className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                  fdprocessedid="q9edo2"
                >
                  <i className="ph ph-caret-left"></i>
                </button>
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: "3335px",
                      opacity: 1,
                    //   transform: translate3d("-725px, 0px, 0px")
                    }}
                  >
                    <div
                      data-index="-5"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img5.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="-4"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img6.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="-3"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img7.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="-2"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img8.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="-1"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img3.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img1.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="1"
                      className="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img2.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="2"
                      className="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img3.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="3"
                      className="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img4.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="4"
                      className="slick-slide slick-active"
                      tabindex="-1"
                      aria-hidden="false"
                      style={{outline: "none", width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img5.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="5"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img6.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="6"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img7.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="7"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img8.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="8"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style={{outline: "none", width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img3.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="9"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img1.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="10"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img2.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="11"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img3.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="12"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img4.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="13"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img5.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="14"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img6.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="15"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img7.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="16"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img8.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="17"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{width: "145px"}}
                    >
                      <div>
                        <div
                          className="brand-item"
                          tabindex="-1"
                          style={{width: "100%", display: "inline-block"}}
                        >
                          <img src="/images/thumbs/brand-img3.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                  fdprocessedid="hy6pc"
                >
                  <i className="ph ph-caret-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="new-arrival pb-80">
        <div className="container container-lg">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">New Arrivals</h5>
              <div className="flex-align mr-point gap-16">
                <Link
                  className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                  href="/shop.html"
                >
                  View All Deals
                </Link>
              </div>
            </div>
          </div>
          <div className="new-arrival__slider arrow-style-two">
            <div className="slick-slider slick-initialized" dir="ltr">
              <button
                type="button"
                className="slick-arrow slick-prev slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                fdprocessedid="dltd6"
              >
                <i className="ph ph-caret-left"></i>
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: "4386px",
                    opacity: 1,
                    // transform: translate3d("-1548px, 0px, 0px")
                }}
                  
                >
                  <div
                    data-index="-3"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img24.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-2"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img25.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-1"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="0"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img20.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img22.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                    className="slick-slide slick-active slick-current"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img23.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                    className="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img24.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="5"
                    className="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img25.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="6"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{outline: "none", width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="7"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img20.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="8"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="9"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img22.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="10"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img23.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="11"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img24.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="12"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img25.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="13"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "258px"}}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center"
                            href="/product-details"
                          >
                            <img
                              src="/images/thumbs/product-img21.png"
                              alt=""
                            />
                          </Link>
                          <div className="product-card__content mt-12">
                            <div className="flex-align gap-6">
                              <span className="text-xs fw-bold text-gray-500">
                                4.8
                              </span>
                              <span className="text-15 fw-bold text-warning-600 d-flex">
                                <i className="ph-fill ph-star"></i>
                              </span>
                              <span className="text-xs fw-bold text-gray-500">
                                (17k)
                              </span>
                            </div>
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                              <Link
                                className="link text-line-2"
                                href="/product-details"
                              >
                                C-500 Antioxidant Protect Dietary Supplement
                              </Link>
                            </h6>
                            <div className="flex-align gap-4">
                              <span className="text-main-600 text-md d-flex">
                                <i className="ph-fill ph-storefront"></i>
                              </span>
                              <span className="text-gray-500 text-xs">
                                By Lucky Supermarket
                              </span>
                            </div>
                            <div className="flex-between gap-8 mt-24 flex-wrap">
                              <div className="product-card__price">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">
                                  $28.99
                                </span>
                                <span className="text-heading text-md fw-semibold">
                                  $14.99
                                  <span className="text-gray-500 fw-normal">
                                    /Qty
                                  </span>
                                </span>
                              </div>
                              <Link
                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                href="/cart.html"
                              >
                                Add <i className="ph ph-shopping-cart"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="slick-arrow slick-next slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                fdprocessedid="vwm8aj"
              >
                <i className="ph ph-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="shipping mb-24" id="shipping">
        <div className="container container-lg">
          <div className="row gy-4">
            <div className="col-xxl-3 col-sm-6">
              <div className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                  <i className="ph-fill ph-car-profile"></i>
                </span>
                <div className="">
                  <h6 className="mb-0">Free Shipping</h6>
                  <span className="text-sm text-heading">
                    Free shipping all over the US
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-sm-6">
              <div className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                  <i className="ph-fill ph-hand-heart"></i>
                </span>
                <div className="">
                  <h6 className="mb-0">100% Satisfaction</h6>
                  <span className="text-sm text-heading">
                    Free shipping all over the US
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-sm-6">
              <div className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                  <i className="ph-fill ph-credit-card"></i>
                </span>
                <div className="">
                  <h6 className="mb-0">Secure Payments</h6>
                  <span className="text-sm text-heading">
                    Free shipping all over the US
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-sm-6">
              <div className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                  <i className="ph-fill ph-chats"></i>
                </span>
                <div className="">
                  <h6 className="mb-0">24/7 Support</h6>
                  <span className="text-sm text-heading">
                    Free shipping all over the US
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="newsletter">
        <div className="container container-lg">
          <div className="newsletter-box position-relative rounded-16 flex-align gap-16 flex-wrap z-1">
            <img
              src="/images/bg/newsletter-bg.png"
              alt=""
              className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
            />
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="">
                  <h1 className="text-white mb-12">
                    Don't Miss Out on Grocery Deals
                  </h1>
                  <p className="text-white h5 mb-0">
                    SING UP FOR THE UPDATE NEWSLETTER
                  </p>
                  <form action="#" className="position-relative mt-40">
                    <input
                      type="text"
                      className="form-control common-input rounded-pill text-white py-22 px-16 pe-144"
                      placeholder="Your email address..."
                      fdprocessedid="dlestp"
                    />
                    <button
                      type="submit"
                      className="btn btn-main-two rounded-pill position-absolute top-50 translate-middle-y inset-inline-end-0 me-10"
                      fdprocessedid="5urh5"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 text-center d-xl-block d-none">
                <img src="/images/thumbs/newsletter-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer py-120">
        <img
          src="/images/bg/body-bottom-bg.png"
          alt="BG"
          className="body-bottom-bg"
        />
        <div className="container container-lg">
          <div className="footer-item-wrapper d-flex align-items-start flex-wrap">
            <div className="footer-item">
              <div className="footer-item__logo">
                <Link href="/">
                  <img src="/images/logo/logo.png" alt="" />
                </Link>
              </div>
              <p className="mb-24">
                We're Grocery Shop, an innovative team of food supliers.
              </p>
              <div className="flex-align gap-16 mb-16">
                <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                  <i className="ph-fill ph-map-pin"></i>
                </span>
                <span className="text-md text-gray-900">
                  789 Inner Lane, Biyes park, California, USA
                </span>
              </div>
              <div className="flex-align gap-16 mb-16">
                <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                  <i className="ph-fill ph-phone-call"></i>
                </span>
                <div className="flex-align gap-16 flex-wrap">
                  <Link
                    className="text-md text-gray-900 hover-text-main-600"
                    href="/tel:+00123456789"
                  >
                    +00 123 456 789
                  </Link>
                  <span className="text-md text-main-600">or</span>
                  <Link
                    className="text-md text-gray-900 hover-text-main-600"
                    href="/tel:+00987654012"
                  >
                    +00 987 654 012
                  </Link>
                </div>
              </div>
              <div className="flex-align gap-16 mb-16">
                <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                  <i className="ph-fill ph-envelope"></i>
                </span>
                <Link
                  className="text-md text-gray-900 hover-text-main-600"
                  href="/mailto:support24@marketpro.com"
                >
                  support24@marketpro.com
                </Link>
              </div>
            </div>
            <div className="footer-item">
              <h6 className="footer-item__title">Information</h6>
              <ul className="footer-menu">
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Become a Vendor
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Our Suppliers
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Extended Plan
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h6 className="footer-item__title">Customer Support</h6>
              <ul className="footer-menu">
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Report Abuse
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Submit and Dispute
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Policies &amp; Rules
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Online Shopping
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h6 className="footer-item__title">My Account</h6>
              <ul className="footer-menu">
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    My Account
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Order History
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Shoping Cart
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Compare
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Help Ticket
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/cart.html"
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h6 className="footer-item__title">Daily Groceries</h6>
              <ul className="footer-menu">
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Dairy &amp; Eggs
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Meat &amp; Seafood
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Breakfast Food
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Household Supplies
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Bread &amp; Bakery
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Pantry Staples
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h6 className="">Shop on The Go</h6>
              <p className="mb-16">Marketpro App is available. Get it now</p>
              <div className="flex-align gap-8 my-32">
                <Link className="" href="/https://www.apple.com/store">
                  <img src="/images/thumbs/store-img1.png" alt="" />
                </Link>
                <Link className="" href="/https://play.google.com/store/apps?hl=en">
                  <img src="/images/thumbs/store-img2.png" alt="" />
                </Link>
              </div>
              <ul className="flex-align gap-16">
                <li>
                  <Link
                    className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                    href="/https://www.facebook.com"
                  >
                    <i className="ph-fill ph-facebook-logo"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                    href="/https://www.twitter.com"
                  >
                    <i className="ph-fill ph-twitter-logo"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                    href="/https://www.linkedin.com"
                  >
                    <i className="ph-fill ph-instagram-logo"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                    href="/https://www.pinterest.com"
                  >
                    <i className="ph-fill ph-linkedin-logo"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-footer bg-color-one py-8">
        <div className="container container-lg">
          <div className="bottom-footer__inner flex-between flex-wrap gap-16 py-16">
            <p className="bottom-footer__text">
              Marketpro eCommerce © 2024. All Rights Reserved
            </p>
            <div className="flex-align gap-8 flex-wrap">
              <span className="text-heading text-sm">We Are Acepting</span>
              <img src="/images/thumbs/payment-method.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
