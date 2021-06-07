import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const FooterHome = () => {
  return (
    <div>
      <div class="foot-bg">
        <Link to="/about">About🗯   </Link>
        <Link to="/help">Help 🤔   </Link>
        <Link to="/prints">Prints🛒   </Link>
        <p>© Flickr.org</p>
      </div>
    </div>
  );
};

export default FooterHome;
