import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-web">
        <span>GiphyJoy</span>
      </div>
      <div className="menu">
        <div className="button-wrapper home">
          <div className="menu-button hover-home">
            <h2>Home</h2>
          </div>
        </div>
        <div className="button-wrapper reactions">
          <div className="menu-button hover-reactions">
            <h2>Reactions</h2>
          </div>
        </div>
        <div className="button-wrapper entertainment">
          <div className="menu-button hover-entertainment">
            <h2>Entertainment</h2>
          </div>
        </div>
        <div className="button-wrapper trending">
          <div className="menu-button hover-trending">
            <h2>Trending</h2>
          </div>
        </div>
      </div>
      <div className="button">
        <h2>Create</h2>
      </div>
    </div>
  );
};

export default Header;
