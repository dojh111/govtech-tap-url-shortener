import React from "react";
import PropTypes from "prop-types";
import { GiUnderwearShorts } from "react-icons/gi";

const Header = ({ title }) => {
  return (
    <header>
      <div className="title-container">
        <h1 className="header">{title}</h1>
        <h1 className="header">
          <GiUnderwearShorts className="header" />
        </h1>
      </div>

      <p className="body">
        Shorten lengthy URLs with{" "}
        <span style={{ fontWeight: "bold" }}>Shortify</span>, the fastest URL
        shortener available!
      </p>

      <p className="body">
        Just paste a URL you want to shorten into the box below, and you will
        get your shortened URL in no time!
      </p>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
