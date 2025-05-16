import React from 'react'
import { Link } from 'react-router-dom';
// import imge from './assest/images/logo/logo.png'

function HeaderTwo() {
  return (
    <header className="header-middle bg-color-one border-bottom border-gray-100">
      <div className="container container-lg">
        <nav className="header-inner flex-between">
          <div className="logo">
            <Link className="link" to="/">
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
                style={{width: "146px"}}
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
                    <span className="select2-selection__arrow" role="presentation">
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
                    style={{width: "146px"}}
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
              <Link className="flex-align gap-4 item-hover" to ="/wishlist">
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
              <Link className="flex-align gap-4 item-hover" to ="/cart">
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
  );
}

export default HeaderTwo