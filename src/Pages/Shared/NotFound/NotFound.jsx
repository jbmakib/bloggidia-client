import React from "react";
import styled from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className={styled["not-found"]}>
            <div className="text-center">
                <h1 className="fs-biggest">404</h1>
                <h1>Page Not Found</h1>
                <h3>Lost In Space?</h3>
                <Link to="/" className="link-primary d-inline-block">
                    <h5>&#8592; Back to home</h5>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
