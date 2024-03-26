import React from "react";
import Spline from '@splinetool/react-spline';
import styles from '../../../styles/Startup.module.css'; // Import the CSS module

const Startup = (props) => {

  return (
    <div className={`${styles.splineContainer}`}>
    <Spline scene="https://prod.spline.design/0E98HIpJnDUzvwzt/scene.splinecode" />
      </div>
  );
};
export default Startup;
