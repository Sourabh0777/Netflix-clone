import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [Shows, handleShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav_container ${Shows && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
          onClick={() => navigate("/")}
        />
        <>
        {/* <ul>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
        <img className="nav_search_icon" src="./images/white-search-icon-transparent-background-1.jpg" alt="" /> */}
        </>
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          onClick={() => navigate("/profile/")}
        />
      </div>
    </div>
  );
};

export default NavBar;
