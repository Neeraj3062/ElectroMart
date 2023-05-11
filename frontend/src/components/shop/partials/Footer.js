import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import './style.css'
const Footer = (props) => {
  const history = useHistory();  
  return (
    <Fragment>
      <footer className="footer">
    <div className="l-footer">
      <h1>

        <h1 className="footer_head" >ELECTROMART</h1>
      </h1>
      <p className="footer_subhead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae
        aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.</p>
    </div>
    <ul className="r-footer">
      <li>
        <h2>
          Social</h2>
        <ul className="box">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Github</a></li>    
        </ul>
      </li>
      <li className="features">
        <h2>
          Information</h2>
        <ul className="box h-box">
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Research</a></li>
          <li><a href="#">Sales</a></li>          
        </ul>
      </li>
      <li>
        <h2>
          Quick Links</h2>
        <ul className="box">
          <li><a href="#"     onClick={(e) => history.push("/")}> Home</a></li>
          <li><a href="#"> About Us</a></li>
          <li><a href="#"> Contact</a></li>
          <li><a href="#"> Signup</a></li>
        </ul>
      </li>
      <li>
        <h2>
          Legal</h2>
        <ul className="box">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">FAQ's</a></li>
        </ul>
      </li>
    </ul>
    <div className="b-footer">
      <p>
        All rights reserved by ©ElectroMart 2023 </p>
    </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
