import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
                <Link className="navbar-brand" to="/">
                    Bloggidea
                </Link>
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
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-primary"
                                    : "nav-link"
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-primary"
                                    : "nav-link"
                            }
                            to="/blogs"
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-primary"
                                    : "nav-link"
                            }
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-primary"
                                    : "nav-link"
                            }
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
