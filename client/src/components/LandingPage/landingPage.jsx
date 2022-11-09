import React from "react";
import { Link } from "react-router-dom";
import styles from "./landingPage.module.css";
export default function Start() {
  return (
    <div className={styles.start}>
      <img
        className={styles.img}
        src="https://moderndogmagazine.com/sites/default/files/images/uploads/Inset-3_2.jpg"
        alt="img"
      />
      <Link to="/home">
        <h1>Welcome</h1>
      </Link>
    </div>
  );
}
