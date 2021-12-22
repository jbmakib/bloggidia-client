import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className="text-white text-center container">
                <h1 className="fs-biggest">Write everything, what you think</h1>
                <Link to="/dashboard/new">
                    <button className="btn btn-outline-primary mt-3">
                        Start Writing
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
