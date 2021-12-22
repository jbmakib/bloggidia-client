import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className="text-white text-center container">
                <h1 className="fs-biggest">Write everything, what you think</h1>
            </div>
        </div>
    );
};

export default Banner;
