import React from "react";

const SocialLinks = () => {
  return (
    <>
      <li>
        <a href="https://twitter.com/VALoansForVets" rel="noopener noreferrer" target="_blank">
          <i className="zmdi zmdi-twitter" />
        </a>
      </li>
      <li>
        <a
          href="http://www.youtube.com/c/JimmyVercellino"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="zmdi zmdi-youtube" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/VALoansForVets/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="zmdi zmdi-facebook" />
        </a>
      </li>
      <li>
        <a href="https://g.page/VALoansForVets" rel="noopener noreferrer" target="_blank">
          <i className="zmdi zmdi-google" />
        </a>
      </li>
    </>
  );
};

export default SocialLinks;
