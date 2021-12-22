import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";

const Home = () => {
    window.document.title = "Bloggidea - Home";
    return (
        <>
            <Header />
            <Banner />
        </>
    );
};

export default Home;
