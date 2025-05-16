import React from "react";
import { Link } from "react-router-dom";
// import logo from './/images/logo/logo.png'

function HeaderOne() {
  return (
    <div className="header-top bg-main-600 flex-between">
      <div className="container container-lg">
        <div className="flex-between flex-wrap gap-8 d-flex justify-content-between">
          <ul className="flex-align flex-wrap d-none d-md-flex d-flex justify-content-between">
            <li className="border-right-item">
              <Link
                className="text-white text-sm hover-text-decoration-underline"
                to="/become-seller"
              >
                Become A Seller
              </Link>
            </li>
            <li className="border-right-item">
              <Link
                className="text-white text-sm hover-text-decoration-underline"
                to="/"
              >
                About us
              </Link>
            </li>
            <li className="border-right-item">
              <Link
                className="text-white text-sm hover-text-decoration-underline"
                to="/"
              >
                Free Delivery
              </Link>
            </li>
            <li className="border-right-item">
              <Link
                className="text-white text-sm hover-text-decoration-underline"
                to="/"
              >
                Returns Policy
              </Link>
            </li>
          </ul>
          <ul className="header-top__right flex-align flex-wrap">
            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
              <Link className="text-white text-sm py-8" to="/">
                Help Center
              </Link>
              <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                <li className="nav-submenu__item">
                  <Link
                    className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                    to="/"
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
                    to="/"
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
              <Link className="selected-text text-white text-sm py-8" to="/">
                Eng
              </Link>
              <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                <li>
                  <Link
                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                    to="/"
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
                    to="/"
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
                    to="/"
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
                    to="/"
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
                    to="/"
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
                    to="/"
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
              <Link className="selected-text text-white text-sm py-8" to="/">
                USD
              </Link>
              <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                <li>
                  <Link
                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                    to="/"
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
                    to="/"
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
                    to="/"
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
                    to="/"
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
                    to="/"
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
                    to="/"
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
                to="/account"
              >
                <span className="icon text-md d-flex">
                  <i className="ph ph-user-circle"></i>{" "}
                </span>
                <span className="hover-text-decoration-underline">My Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderOne;
