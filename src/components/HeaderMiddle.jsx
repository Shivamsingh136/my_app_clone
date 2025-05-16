import React from 'react';
import { Link } from 'react-router-dom';

const categoryOptions = [
  'All Categories', 'Grocery', 'Breakfast & Dairy', 'Vegetables', 'Milks and Dairies',
  'Pet Foods & Toy', 'Breads & Bakery', 'Fresh Seafood', 'Fronzen Foods',
  'Noodles & Rice', 'Ice Cream'
];

const locationOptions = [
  'Alabama', 'Alaska', 'Arizona', 'Delaware', 'Florida',
  'Georgia', 'Hawaii', 'Indiana', 'Marzland', 'Nevada',
  'New Jersey', 'New Mexico', 'New York'
];

const HeaderMiddle = () => {
  return (
    <header className="header-middle bg-color-one border-bottom border-gray-100">
      <div className="container container-lg">
        <nav className="header-inner flex-between">
          <div className="logo">
            <Link className="link" to="/">
              <img src="/images/logo/logo.png" alt="Logo" />
            </Link>
          </div>

          <form className="flex-align flex-wrap form-location-wrapper">
            <div className="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none">
              <select className="js-example-basic-single border border-gray-200 border-end-0">
                {categoryOptions.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <div className="search-form__wrapper position-relative">
                <input
                  type="text"
                  className="search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44"
                  placeholder="Search for a product or brand"
                />
                <button
                  type="submit"
                  className="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
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
                  <select className="js-example-basic-single border border-gray-200 border-end-0">
                    {locationOptions.map((loc, idx) => (
                      <option key={idx} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>

          <div className="header-right flex-align d-lg-block d-none">
            <div className="flex-align flex-wrap gap-12">
              <button type="button" className="search-icon flex-align d-lg-none d-flex gap-4 item-hover">
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
                <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">Wishlist</span>
              </Link>

              <Link className="flex-align gap-4 item-hover" to="/cart">
                <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                  <i className="ph ph-shopping-cart-simple"></i>
                  <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                    2
                  </span>
                </span>
                <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">Cart</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMiddle;
