import React,{useEffect, useState} from "react";
import styles from "./Webpage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import Map from "../../components/map/ViewMap"


//contact us section
const ContactUs = ({ website,from }) => {
  const [lat,setLat] = useState(null);
  const [lng,setLng] = useState(null);
  useEffect(()=>{
    if(website.address && website.address !== ""){
      setLng(JSON.parse(website.address).coordinates.lng)
      setLat(JSON.parse(website.address).coordinates.lat)
   }
  },[website])
  
  return (
    <div className={styles.aboutBack} id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5"></div>
          <div className="col-lg-2">
            <div className={styles.sectiontitle}>
              <h2 style={{ textAlign: "center" }}>CONTACT US</h2>
            </div>
          </div>
          <div className="col-lg-5"></div>
        </div>
        <p style={{ textAlign: "center" }} className="pb-3">
          We are like to here from you. Contact Us anytime from any of folowing
          method
        </p>
        <div className="row pt-3">
          <div className="col-lg-4">
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faMapPin}
                size="3x"
                style={{ textAlign: "center", justifyContent: "center" }}
              />
              <div className="mt-3">
                <h3>Address</h3>
              </div>
  
            </div>
            <div className={`${styles.textContainer} pb-3`}>
              {website.address && website.address !== "" && JSON.parse(website.address).address}
            </div>
           
          </div>
          <div className="col-lg-4">
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="3x"
                style={{ textAlign: "center" }}
              />
              <div className="mt-3">
                <h3>Email</h3>
              </div>
            </div>
            <div className={`${styles.textContainer} pb-3`}>
              {website.email}
            </div>
          </div>
          <div className="col-lg-4">
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faMobile}
                size="3x"
                style={{ textAlign: "center" }}
              />
              <div className="mt-3">
                <h3>Phone Number</h3>
              </div>
            </div>
            <div className={`${styles.textContainer} pb-3`}>
              {from === 'create' ? website.pnumber :  website.mobile}
            </div>
          </div>
          <Map lat={lat || null} lng={lng || null}/>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
