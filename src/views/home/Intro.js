import React from "react";
import styles from "./Home.module.css";
import { Button } from "react-bootstrap";
import {authenticated} from "../../hoc/authenticated";

const Intro = ({history}) => {
  return (
    <div id="intro" className={styles.module}>
      <div className="module-inside intro-body">
        <div className="container">
          <div className="row mt-5">
            <div className={`col-lg-8 ${styles.introContent}`}>
              <div className="row">
                {/* <h6 className={styles.welcomeText}>WELCOME TO </h6> */}
              </div>
              <div className="row">
                {/* <h2 className={styles.welcomeTextSecond}>Website Builder</h2> */}
              </div>
              <div className="row">
                <h2 className={styles.welcomeTextSecond}>Quick Sites</h2>
              </div>
              <div className="row">
                <Button variant="primary" onClick ={()=>{
                    history.push(`${process.env.PUBLIC_URL}/category`)
                }}>Create Yours </Button>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
