import React, { Fragment, useEffect } from "react";
import Layout from "../layout";
import "./about.css";
import hero from "./hero.svg"; // Import SVG as a component

const AboutComponent = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>  
      <section class="section hero" id="home" aria-label="hero">
        <div className="about_head">
          About Us
        </div>
        <div class="container">
          <div class="hero-content">
            <p class="hero-subtitle">ElectroMart</p>
            <h1 class="h1 hero-title">Lorem ipsum dolor sit amet.</h1>
            <p class="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporthem incididunt ut labore et
              dolore magna
              aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporthem incididunt ut labore et
              dolore magna
              aliqua.              
            </p>

          </div>
          <figure class="hero-banner">
            <img src={hero} width="300" height="400" alt="hero banner" class="w-100" />
          </figure>
        </div>
    </section>
    <section class="section blog team_section" id="blog" aria-label="blog">
        <div class="container">
          <h2 class="h2 section-title our_team_title">Our Team </h2>
          <p class="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna
            aliqua.
          </p>
        </div>
      </section>
      <div class="container_team">
        <div class="boxes">
          <div class="team_box">
            <img src="./assets/images/ot1.png" alt="" />
            <div class="team_links">
              <a href=""><i class="bx bxl-facebook"></i></a>
              <a href=""><i class="bx bxl-instagram"></i></a>
              <a href=""><i class="bx bxl-linkedin"></i></a>
              <a href=""><i class="bx bxl-github"></i></a>
            </div>
            <div class="details">
              <h2>Neeraj Bukane</h2>
              <p>33114</p>
            </div>
          </div>
          <div class="team_box">
            <img src="./assets/images/ot2.png" alt="" />
            <div class="team_links">
              <a href=""><i class="bx bxl-facebook"></i></a>
              <a href=""><i class="bx bxl-instagram"></i></a>
              <a href=""><i class="bx bxl-linkedin"></i></a>
              <a href=""><i class="bx bxl-github"></i></a>
            </div>
            <div class="details">
              <h2>Sanyog kalantri</h2>
              <p>33137</p>
            </div>
          </div>
          <div class="team_box">
            <img src="./assets/images/ot3.png" alt="" />
            <div class="team_links">
              <a href=""><i class="bx bxl-facebook"></i></a>
              <a href=""><i class="bx bxl-instagram"></i></a>
              <a href=""><i class="bx bxl-linkedin"></i></a>
              <a href=""><i class="bx bxl-github"></i></a>
            </div>
            <div class="details">
              <h2>Samyak Jain</h2>
              <p>33169</p>
            </div>
          </div>
          <div class="team_box">
            <img src="./assets/images/ot4.png" alt="" />
            <div class="team_links">
              <a href=""><i class="bx bxl-facebook"></i></a>
              <a href=""><i class="bx bxl-instagram"></i></a>
              <a href=""><i class="bx bxl-linkedin"></i></a>
              <a href=""><i class="bx bxl-github"></i></a>
            </div>
            <div class="details">
              <h2>Gauri Takalikar</h2>
              <p>33178</p>
            </div>
          </div>
        </div>
      </div>    
      </div>
   
  );
};

const About = (props) => {
  return (
    <Fragment>
      <Layout children={<AboutComponent />} />
    </Fragment>
  );
};

export default About;
