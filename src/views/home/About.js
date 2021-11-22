import React from "react";
import styles from "./Home.module.css";
import site from "../../assets/img/site.jpg";


const About = () => {
  return (
    <div className={`${styles.aboutus} mt-4`} id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 col-md-12">
            <div className="about-us-content mb-100">
              <div className={styles.sectiontitle}>
                <p>about us</p>
                <h2>
                  <span>Let Us</span> Tell Our Story
                </h2>
              </div>
              <p className={`${styles.aboutusbodytext} mt-5`}>
             
              </p>
              <p className={`${styles.aboutusbodytext} mt-2`}>
                
Quick Sites is a fast an easy way to design and build your very own high quality website.
This platform gives you the freedom to create, design, manage and develop your webpages whether you’re promoting your business or opening your store.


                <ul>
                  <li>
                  No Technical Knowledge Needed!
                  </li>

                  <li>
                  24/7 Live Support
                  </li>
                  <li>
                  Faster Page Load Times
                  </li>
                </ul>

              </p>
              <p className={`${styles.aboutusbodytext} mt-2`}>
             
              <a className="btn btn-primary" href="https://www.youtube.com/watch?v=UYG7DhL5nkQ" role="button">Learn how To Create a Website</a>

              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-12">
            <img className={styles.aboutusimage} src={site} alt="site" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
