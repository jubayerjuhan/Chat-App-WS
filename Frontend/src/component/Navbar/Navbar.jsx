import React from "react";
import "./Navbar.scss";
import logo from "../../assets/svg/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search Here" />
      </div>
      <div className="profile">
        <span class="material-symbols-outlined">notifications</span>
        <div className="profileInfo">
          <p>Jubayer Juhan</p>
          <div className="image">
            <div className="greenDot" />
            <img src="https://picsum.com/400" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
