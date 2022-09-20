import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className="header">{title}</h1>
      <p className="body">
        Shorten your lengthy URLs with Shortify, the fastest URL shortener
        available.
      </p>

      <p className="body">
        Just paste a URL you want to shorten into the box below, and you will
        get your shortened URL in no time.
      </p>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
