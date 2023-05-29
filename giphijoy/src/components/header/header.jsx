import React from "react";
import "./header.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-web">
        <span>GiphyJoy</span>
      </div>
      <div className="menu">
        <div className="button-wrapper reactions">
          <div className="menu-button hover-reactions">
            <h2>Trending</h2>
          </div>
        </div>
        <div className="button-wrapper entertaiment">
          <div className="menu-button hover-entertaiment">
            <h2>Psychedelic</h2>
          </div>
        </div>
        <div className="button-wrapper sports">
          <div className="menu-button hover-sports">
            <h2>Short</h2>
          </div>
        </div>
        <div className="button-wrapper stickers">
          <div className="menu-button hover-stickers">
            <h2>Memes</h2>
          </div>
        </div>
      </div>
      {/* <div className="button">
        <h2>Uploads</h2>
      </div>
      <div className="button">
        <h2>Create</h2>
      </div> */}
    </div>
  );
};

export default Header;
