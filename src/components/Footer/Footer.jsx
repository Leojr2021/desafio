import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GiCheckedShield } from "react-icons/gi";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <img
          src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671136804/it%20glober/pufi_logo_black_idnrjv.png"
          alt=""
        />
      </div>
      <div className="footer_products bold">
        <p>PUFI RAIN</p>
        <p>PUFI PUFF</p>
        <p>PUFI CART</p>
        <p>PUFI NAP</p>
      </div>
      <div className="footer_siteMap bold">
        <p>
          {" "}
          <a href="#" rel="noopener noreferrer">
            CONTACTO
          </a>
        </p>
        <p>
          {" "}
          <a href="#" rel="noopener noreferrer">
            AYUDA
          </a>
        </p>
        <p>
          {" "}
          <a href="#" rel="noopener noreferrer">
            COMO COMPRAR
          </a>
        </p>
        <p>
          {" "}
          <a href="#" rel="noopener noreferrer">
            TERMINOS Y CONDICIONES
          </a>
        </p>
      </div>
      <div className="footer_secure">
        <p className="bold">COMPRA 100% SEGURA</p>
        <div className="footer_secure-detail">
          <div className="shield">
            <GiCheckedShield size="3em" color="black" />
          </div>
          <div className="shield_text">
            <p >COMPRA CON LA GARANTIA DE PUFI</p>
          </div>
        </div>
      </div>
      <div className="footer_sociaIcons">
        <p className="bold">SIGUENOS</p>

        <div className="footer_sociaIcons-flex">
          <a href="https://www.facebook.com/" rel="noopener noreferrer">
            <BsFacebook size="2em" color="black" />
          </a>
          <a href="https://www.instagram.com/" rel="noopener noreferrer">
            <BsInstagram size="2em" color="black" />
          </a>
          <a href="https://twitter.com/home" rel="noopener noreferrer">
            <BsTwitter size="2em" color="black" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
