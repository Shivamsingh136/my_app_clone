import React from "react";
import { Link } from "react-router-dom";

function Flash() {
  return (
    <div className="banner">
      <div className="container container-lg">
        <div className="banner-item rounded-24 overflow-hidden position-relative arrow-center">
          <Link
            to="/"
            className="scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800"
          >
            <span className="icon line-height-0">
              <i className="ph ph-caret-double-down"></i>
            </span>
          </Link>

          {/* Other content... */}

          <Link
            className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
            to="/shop"
          >
            Explore Shop
            <span className="icon text-xl d-flex">
              <i className="ph ph-shopping-cart-simple"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Flash;
