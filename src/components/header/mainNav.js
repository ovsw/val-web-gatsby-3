import React from "react";
import { Link } from "gatsby";

import { mainNav } from "./mainNav.module.css";

const MainNav = ({ navStructure }) => {
  return (
    <nav className={`${mainNav} in-navigation`}>
      <ul>
        {navStructure.map(({ title, slug, children }, i) => (
          <li key={i} className={children.length > 0 ? "in-dropdown" : ""}>
            <Link to={slug} activeStyle={{ color: "red" }} partiallyActive>
              {title}
            </Link>
            {children.length > 0 && (
              <ul>
                {children.map(({ title, slug }) => (
                  <li key={slug}>
                    <Link to={slug} activeStyle={{ color: "red" }} partiallyActive>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {/* <li><a href='/'>My Story</a></li>
        <li><a href='/'>Apply</a></li>
        <li className='in-dropdown'><a href='/'>VA Home Loans</a>
          <ul>
            <li><a href='/'>VA Loan Eligibility</a></li>
            <li><a href='/'>Obtaining a VA Loan FAQ</a></li>
            <li><a href='/'>Service Details</a></li>
            <li><a href='/'>Service Details</a></li>
          </ul>
        </li>
        <li><a href='/'>Media</a></li>
        <li className='in-dropdown'><a href='contact.html'>Loan Info</a>
          <ul>
            <li><a href='/'>VA Loan Eligibility</a></li>
            <li><a href='/'>Obtaining a VA Loan FAQ</a></li>
            <li><a href='/'>Service Details</a></li>
            <li><a href='/'>Service Details</a></li>
          </ul>
        </li>
        <li><a href='contact.html'>CONTACT</a></li>
        <li><a href='contact.html'>VA COE</a></li>
        <li className='in-dropdown'><a href='blog.html'>BLOG</a>
          <ul>
            <li><a href='blog-list.html'>Blog List Right Sidebar</a></li>
            <li><a href='blog-list-left-sidebar.html'>Blog List Left Sidebar</a></li>
            <li><a href='blog-details.html'>Blog details Right Sidebar</a></li>
            <li><a href='blog-details-left-sidebar.html'>Blog details Left Sidebar</a></li>
          </ul>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainNav;
