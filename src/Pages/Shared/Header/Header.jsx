import React, { useState } from "react";

const Header = () => {
    const [addBg, setAddBg] = useState(false);
    window.addEventListener("scroll", (e) => {
        if (window.scrollY > 30) {
            setAddBg(true);
        } else {
            setAddBg(false);
        }
    });
    return (
        <nav
            className={`navbar navbar-expand-lg w-100 ${
                addBg
                    ? "bg-white navbar-light sticky-top"
                    : "navbar-dark fixed-top"
            }`}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto">
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                        >
                            Home
                        </a>
                        <a className="nav-link" href="/">
                            Features
                        </a>
                        <a className="nav-link" href="/">
                            Pricing
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
