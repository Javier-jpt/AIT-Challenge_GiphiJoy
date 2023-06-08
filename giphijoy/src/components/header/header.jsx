import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-web">
        <span>GiphyJoy</span>
      </div>
      <div className="menu">
        <Link to="/" style={{ textDecoration:'none'}}>
          <div className="button-wrapper gradient">
            <div className="menu-button hover-gradient">
              <h2>Home</h2>
            </div>
          </div>
        </Link>
        <Link to="/reactions" style={{ textDecoration:'none'}}>
          <div className="button-wrapper gradient">
            <div className="menu-button hover-gradient">
              <h2>Reactions</h2>
            </div>
          </div>
        </Link>
        <Link to="/entertainment" style={{ textDecoration:'none'}}>
          <div className="button-wrapper gradient">
            <div className="menu-button hover-gradient">
              <h2>Entertainment</h2>
            </div>
          </div>
        </Link>
        <Link to="/trending" style={{ textDecoration:'none'}}>
          <div className="button-wrapper gradient">
            <div className="menu-button hover-gradient">
              <h2>Trending</h2>
            </div>
          </div>
        </Link>
      </div>
      <Link to="/upload" style={{ textDecoration:'none'}}>
        <div className="button">
          <h2>Create</h2>
        </div>
      </Link>
    </div>
  );
};

export default Header;
