import React from "react";
import Header from "../Shared/Header/Header";

const About = () => {
    window.document.title = "Bloggidea - About";
    return (
        <>
            <Header />
            <h2>This is about page.</h2>
        </>
    );
};

export default About;
