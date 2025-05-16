import React from 'react';
import { Link } from 'react-router-dom';

const menuLinks = [
  { text: 'Become A Seller', href: '/become-seller' },
  { text: 'About us', href: '/' },
  { text: 'Free Delivery', href: '/' },
  { text: 'Returns Policy', href: '/' }
];

const helpCenterItems = [
  { icon: 'ph-headset', text: 'Call Center', href: '/' },
  { icon: 'ph-chat-circle-dots', text: 'Live Chat', href: '/' }
];

const languages = [
  { src: '/images/thumbs/flag1.png', text: 'English' },
  { src: '/images/thumbs/flag2.png', text: 'Japan' },
  { src: '/images/thumbs/flag3.png', text: 'French' },
  { src: '/images/thumbs/flag4.png', text: 'Germany' },
  { src: '/images/thumbs/flag6.png', text: 'Bangladesh' },
  { src: '/images/thumbs/flag5.png', text: 'South Korea' }
];

const currencies = [
  { src: '/images/thumbs/flag1.png', text: 'USD' },
  { src: '/images/thumbs/flag2.png', text: 'Yen' },
  { src: '/images/thumbs/flag3.png', text: 'Franc' },
  { src: '/images/thumbs/flag4.png', text: 'EURO' },
  { src: '/images/thumbs/flag6.png', text: 'BDT' },
  { src: '/images/thumbs/flag5.png', text: 'WON' }
];

const DropdownMenu = ({ label, items, hasIcon }) => (
  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
    <Link className="selected-text text-white text-sm py-8" to="/">{label}</Link>
    <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
      {items.map((item, i) => (
        <li key={i}>
          <Link
            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
            href={item.href || '/'}
          >
            {item.src && <img src={item.src} alt="" className="w-16 h-12 rounded-4 border border-gray-100" />}
            {hasIcon && <span className="text-sm d-flex"><i className={`ph ${item.icon}`}></i></span>}
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

const HeaderTop = () => {
  return (
    <div className="header-top bg-main-600 flex-between">
      <div className="container container-lg">
        <div className="flex-between flex-wrap gap-8">
          <ul className="flex-align flex-wrap d-none d-md-flex">
            {menuLinks.map((link, index) => (
              <li key={index} className="border-right-item">
                <Link className="text-white text-sm hover-text-decoration-underline" href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="header-top__right flex-align flex-wrap">
            <DropdownMenu label="Help Center" items={helpCenterItems} hasIcon />
            <DropdownMenu label="Eng" items={languages} />
            <DropdownMenu label="USD" items={currencies} />
            <li className="border-right-item">
              <Link className="text-white text-sm py-8 flex-align gap-6" to="/account">
                <span className="icon text-md d-flex"><i className="ph ph-user-circle"></i></span>
                <span className="hover-text-decoration-underline">My Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
