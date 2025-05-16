import React from "react";
import { Link } from "react-router-dom";

function MyAccount() {
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
        <button type="button" className="close-button">
          <i className="ph ph-x"></i>
        </button>
        <div className="mobile-menu__inner">
          <Link className="mobile-menu__logo" href="/">
            <img src="/images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            <ul className="nav-menu flex-align nav-menu--mobile">
              <li className="on-hover-item nav-menu__item has-submenu">
                <Link className="nav-menu__link" to="/">
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
                <Link className="nav-menu__link" to="/my-account">
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
                <Link className="nav-menu__link" to="/my-account">
                  Pages
                </Link>
                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      to="/"
                    >
                      Cart
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      to="/"
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
                <Link className="nav-menu__link" to="/my-account">
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
                <Link className="nav-menu__link" to="/my-account">
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
      <header className="header-middle style-two bg-color-neutral">
        <div className="container container-lg">
          <nav className="header-inner flex-between">
            <div className="logo">
              <Link className="link" href="/">
                <img src="/images/logo/logo-two.png" alt="Logo" />
              </Link>
            </div>
            <div className="flex-align gap-16">
              <div className="select-dropdown-for-home-two d-lg-none d-block">
                <ul className="header-top__right style-two flex-align flex-wrap">
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                    <Link
                      className="selected-text text-heading text-sm py-8"
                      to="/my-account"
                    >
                      Eng
                    </Link>
                    <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag1.png"
                            alt="English"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          English
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag2.png"
                            alt="Japan"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Japan
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag3.png"
                            alt="French"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          French
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag4.png"
                            alt="Germany"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Germany
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag6.png"
                            alt="Bangladesh"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Bangladesh
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag5.png"
                            alt="South Korea"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          South Korea
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                    <Link
                      className="selected-text text-heading text-sm py-8"
                      to="/my-account"
                    >
                      USD
                    </Link>
                    <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag1.png"
                            alt="USD"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          USD
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag2.png"
                            alt="Yen"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Yen
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag3.png"
                            alt="Franc"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Franc
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag4.png"
                            alt="EURO"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          EURO
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag6.png"
                            alt="BDT"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          BDT
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag5.png"
                            alt="WON"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          WON
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <form
                action="#"
                className="flex-align flex-wrap form-location-wrapper"
              >
                <div className="search-category style-two d-flex h-48 search-form d-sm-flex d-none">
                  <select
                    className="js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0 select2-hidden-accessible"
                    name="state"
                    data-select2-id="select2-data-29-hsp6"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <option
                      value="1"
                      selected=""
                      data-select2-id="select2-data-31-s7kn"
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
                    data-select2-id="select2-data-30-h26i"
                    style={{width: "151px"}}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabindex="0"
                        aria-disabled="false"
                        aria-labelledby="select2-state-7c-container"
                        aria-controls="select2-state-7c-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-state-7c-container"
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
                      className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0"
                      placeholder="Search for a product or brand"
                      fdprocessedid="vcxegi"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                    fdprocessedid="47sxip"
                  >
                    <i className="ph ph-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="header-right flex-align d-lg-block d-none">
              <div className="header-two-activities flex-align flex-wrap gap-32">
                <button
                  type="button"
                  className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-magnifying-glass"></i>
                  </span>
                </button>
                <Link
                  className="flex-align flex-column gap-8 item-hover-two"
                  to="/my-account"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-user"></i>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Profile
                  </span>
                </Link>
                <Link
                  className="flex-align flex-column gap-8 item-hover-two"
                  to="/"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-heart"></i>
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Wishlist
                  </span>
                </Link>
                <Link
                  className="flex-align flex-column gap-8 item-hover-two"
                  to="/"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph-fill ph-shuffle"></i>
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Compare
                  </span>
                </Link>
                <Link
                  className="flex-align flex-column gap-8 item-hover-two"
                  to="/"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-shopping-cart-simple"></i>
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
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
              <div className="category-two d-none">
                <button
                  type="button"
                  className="category__button flex-align gap-8 fw-medium bg-main-two-600 p-16 text-white"
                >
                  <span className="icon text-2xl d-xs-flex d-none">
                    <i className="ph ph-dots-nine"></i>
                  </span>
                  <span className="d-sm-flex d-none">All</span> Categories
                  <span className="arrow-icon text-xl d-flex">
                    <i className="ph ph-caret-down"></i>
                  </span>
                </button>
                <div className="responsive-dropdown cat common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 false">
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
                  <ul className="scroll-sm p-0 py-8 overflow-y-auto">
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Cell Phone</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Cell Phone
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Wear</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Wear
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Computer</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Computer
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Headphone</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Headphone
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Smart Screen</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Smart Screen
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Smart Home</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Smart Home
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Digital Accessories</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Digital Accessories
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span> Value Added Services</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Value Added Services
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Car Products</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Car Products
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Ecological Products</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Ecological Products
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Flat</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Flat
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Commercial Terminal</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Commercial Terminal
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Headphone</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Headphone
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
                      >
                        <span>Smart Screen</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right"></i>
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Smart Screen
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop.html">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="category main on-hover-item bg-main-600 text-white d-block">
                <button
                  type="button"
                  className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-white"
                  fdprocessedid="lgszjd"
                >
                  <span className="icon text-2xl d-xs-flex d-none">
                    <i className="ph ph-dots-nine"></i>
                  </span>
                  <span className="d-sm-flex d-none">All</span> Categories
                  <span className="arrow-icon text-xl d-flex">
                    <i className="ph ph-caret-down"></i>
                  </span>
                </button>
                <div className="responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper">
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
                        to="/my-account"
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
                            <Link href="/shop.html">Potato &amp; Tomato</Link>
                          </li>
                          <li>
                            <Link href="/shop.html">Cucumber &amp; Capsicum</Link>
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
                            <Link href="/shop.html">Cabbage &amp; Cauliflower</Link>
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
                        to="/my-account"
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
                            <Link href="/shop.html">Soda &amp; Cocktail Mix </Link>
                          </li>
                          <li>
                            <Link href="/shop.html"> Sports &amp; Energy Drinks</Link>
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
                        to="/my-account"
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
                            <Link href="/shop.html"> Fresh &amp; Frozen Meat</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        to="/my-account"
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
                            <Link href="/shop.html"> Granola &amp; Cereal Bars</Link>
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
                        to="/my-account"
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
                        to="/my-account"
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
                            <Link href="/shop.html"> Marie, Health, Digestive</Link>
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
                        to="/my-account"
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
                            <Link href="/shop.html"> Indian &amp; Exotic Herbs</Link>
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
                            <Link href="/shop.html"> Orangic Dals &amp; pulses</Link>
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
                    <Link className="nav-menu__link" to="/">
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
                    <Link className="nav-menu__link" to="/my-account">
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
                    <Link className="nav-menu__link" to="/my-account">
                      Pages
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          to="/"
                        >
                          Cart
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          to="/"
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
                          aria-current="page"
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
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
                    <Link className="nav-menu__link" to="/my-account">
                      Vendors
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/vendor"
                        >
                          Vendor
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
                          Vendor Two
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          href="/vendor-two-details"
                        >
                          Vendor Two Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                    <Link className="nav-menu__link" to="/my-account">
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
              <div className="select-dropdown-for-home-two d-lg-block d-none">
                <ul className="header-top__right style-two flex-align flex-wrap">
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                    <Link
                      className="selected-text text-heading text-sm py-8"
                      to="/my-account"
                    >
                      Eng
                    </Link>
                    <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag1.png"
                            alt="English"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          English
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag2.png"
                            alt="Japan"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Japan
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag3.png"
                            alt="French"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          French
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag4.png"
                            alt="Germany"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Germany
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag6.png"
                            alt="Bangladesh"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Bangladesh
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag5.png"
                            alt="South Korea"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          South Korea
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                    <Link
                      className="selected-text text-heading text-sm py-8"
                      to="/my-account"
                    >
                      USD
                    </Link>
                    <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag1.png"
                            alt="USD"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          USD
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag2.png"
                            alt="Yen"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Yen
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag3.png"
                            alt="Franc"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Franc
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag4.png"
                            alt="EURO"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          EURO
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag6.png"
                            alt="BDT"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          BDT
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          to="/my-account"
                        >
                          <img
                            src="/images/thumbs/flag5.png"
                            alt="WON"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          WON
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="me-8 d-lg-none d-block">
                <div className="header-two-activities flex-align flex-wrap gap-32">
                  <button
                    type="button"
                    className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                  >
                    <span className="text-2xl text-white d-flex position-relative item-hover__text">
                      <i className="ph ph-magnifying-glass"></i>
                    </span>
                  </button>
                  <Link
                    className="flex-align flex-column gap-8 item-hover-two"
                    to="/my-account"
                  >
                    <span className="text-2xl text-white d-flex position-relative item-hover__text">
                      <i className="ph ph-user"></i>
                    </span>
                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                      Profile
                    </span>
                  </Link>
                  <Link
                    className="flex-align flex-column gap-8 item-hover-two"
                    to="/"
                  >
                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                      <i className="ph ph-heart"></i>
                      <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                        2
                      </span>
                    </span>
                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                      Wishlist
                    </span>
                  </Link>
                  <Link
                    className="flex-align flex-column gap-8 item-hover-two"
                    to="/"
                  >
                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                      <i className="ph-fill ph-shuffle"></i>
                      <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                        2
                      </span>
                    </span>
                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                      Compare
                    </span>
                  </Link>
                  <Link
                    className="flex-align flex-column gap-8 item-hover-two"
                    to="/"
                  >
                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                      <i className="ph ph-shopping-cart-simple"></i>
                      <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                        2
                      </span>
                    </span>
                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                      Cart
                    </span>
                  </Link>
                </div>
              </div>
              <button
                type="button"
                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
              >
                <i className="ph ph-list"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Account</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link
                  className="text-gray-900 flex-align gap-8 hover-text-main-600"
                  to="/"
                >
                  <i className="ph ph-house"></i>Home
                </Link>
              </li>
              <li className="flex-align">
                <i className="ph ph-caret-right"></i>
              </li>
              <li className="text-sm text-main-600">Account</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="account py-80">
        <div className="container container-lg">
          <form action="#">
            <div className="row gy-4">
              <div className="col-xl-6 pe-xl-5">
                <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 h-100">
                  <h6 className="text-xl mb-32">Login</h6>
                  <div className="mb-24">
                    <label
                      for="username"
                      className="text-neutral-900 text-lg mb-8 fw-medium"
                    >
                      Username or email address
                      <span className="text-danger">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      className="common-input"
                      id="username"
                      placeholder="First Name"
                      fdprocessedid="jvzsal"
                    />
                  </div>
                  <div className="mb-24">
                    <label
                      for="password"
                      className="text-neutral-900 text-lg mb-8 fw-medium"
                    >
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type="password"
                        className="common-input"
                        id="password"
                        placeholder="Enter Password"
                        value="password"
                        fdprocessedid="zqdqpp"
                      />
                      <span
                        className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
                        id="#password"
                      ></span>
                    </div>
                  </div>
                  <div className="mb-24 mt-48">
                    <div className="flex-align gap-48 flex-wrap">
                      <button
                        type="submit"
                        className="btn btn-main py-18 px-40"
                        fdprocessedid="87a8cq"
                      >
                        Log in
                      </button>
                      <div className="form-check common-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember"
                          value=""
                        />
                        <label
                          className="form-check-label flex-grow-1"
                          for="remember"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-48">
                    <Link
                      className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                      to="/my-account"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
                  <h6 className="text-xl mb-32">Register</h6>
                  <div className="mb-24">
                    <label
                      for="usernameTwo"
                      className="text-neutral-900 text-lg mb-8 fw-medium"
                    >
                      Username <span className="text-danger">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      className="common-input"
                      id="usernameTwo"
                      placeholder="Write a username"
                      fdprocessedid="10zguh"
                    />
                  </div>
                  <div className="mb-24">
                    <label
                      for="emailTwo"
                      className="text-neutral-900 text-lg mb-8 fw-medium"
                    >
                      Email address<span className="text-danger">*</span>{" "}
                    </label>
                    <input
                      type="email"
                      className="common-input"
                      id="emailTwo"
                      placeholder="Enter Email Address"
                      fdprocessedid="od8xze"
                    />
                  </div>
                  <div className="mb-24">
                    <label
                      for="enter-password"
                      className="text-neutral-900 text-lg mb-8 fw-medium"
                    >
                      Password<span className="text-danger">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type="password"
                        className="common-input"
                        id="enter-password"
                        placeholder="Enter Password"
                        value="password"
                        fdprocessedid="79i9w6"
                      />
                      <span
                        className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
                        id="#enter-password"
                      ></span>
                    </div>
                  </div>
                  <div className="my-48">
                    <p className="text-gray-500">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our
                      <Link
                        className="text-main-600 text-decoration-underline"
                        to="/my-account"
                      >
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="mt-48">
                    <button
                      type="submit"
                      className="btn btn-main py-18 px-40"
                      fdprocessedid="czj508"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
      <footer className="footer py-80">
        <div className="container container-lg">
          <div className="footer-item-two-wrapper d-flex align-items-start flex-wrap">
            <div className="footer-item max-w-275">
              <div className="footer-item__logo">
                <Link href="/">
                  <img src="/images/logo/logo-two-black.png" alt="" />
                </Link>
              </div>
              <p className="mb-24">
                Marketpro become the largest computer parts, gaming pc parts,
                and other IT related products.
              </p>
              <div className="flex-align gap-16 mb-16">
                <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                  <i className="ph-fill ph-phone-call"></i>
                </span>
                <Link
                  className="text-md text-gray-900 hover-text-main-600"
                  href="/tel:+00123456789"
                >
                  +00 123 456 789
                </Link>
              </div>
              <div className="flex-align gap-16 mb-16">
                <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                  <i className="ph-fill ph-envelope"></i>
                </span>
                <Link
                  className="text-md text-gray-900 hover-text-main-600"
                  href="/mailto:support24@marketpro.com"
                >
                  support24@marketpro.com
                </Link>
              </div>
              <div className="flex-align gap-16 mb-16">
                <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                  <i className="ph-fill ph-map-pin"></i>
                </span>
                <span className="text-md text-gray-900">
                  789 Inner Lane, California, USA
                </span>
              </div>
            </div>
            <div className="footer-item">
              <h6 className="footer-item__title">About us</h6>
              <ul className="footer-menu">
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Company Profile
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    All Retail Store
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Merchant Center
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Affiliate
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Feedback
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Huawei Group
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Rules &amp; Policy
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
                  <Link className="text-gray-600 hover-text-main-600" href="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Gift Card
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
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Online Shopping
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Redeem Voucher
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
                    to="/"
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
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    to="/"
                  >
                    Wishlist
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
                    Product Support
                  </Link>
                </li>
              </ul>
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
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Extended Plan
                  </Link>
                </li>
                <li className="mb-16">
                  <Link
                    className="text-gray-600 hover-text-main-600"
                    href="/shop.html"
                  >
                    Community
                  </Link>
                </li>
                <li className="mb-16">
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
                    className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                    href="/https://www.facebook.com"
                  >
                    <i className="ph-fill ph-facebook-logo"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                    href="/https://www.twitter.com"
                  >
                    <i className="ph-fill ph-twitter-logo"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                    href="/https://www.linkedin.com"
                  >
                    <i className="ph-fill ph-instagram-logo"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
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

export default MyAccount;
