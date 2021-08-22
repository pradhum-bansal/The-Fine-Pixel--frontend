import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/main.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> The Fine Pixel </h1>
        <p> Best Store For Customised Gifts</p>
        <Link to="/menu">
          <button> SHOP NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
