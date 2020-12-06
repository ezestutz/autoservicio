import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import logo from "../assets/img/logo.png";

const Home = () => {
  return (
    <div className="portada">
      <img className="portadaLogo" src={logo} alt="Logo" />
      <div className="mx-auto">
        <Link to="/productos">
          <button className="portadaButton text-uppercase">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
