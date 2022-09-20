import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className="header">{title}</h1>
      <p className="body">This is a test message</p>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
