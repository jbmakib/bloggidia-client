import React, { useState } from "react";
import "./Login.css";
import loginImg from "../../../assets/media/images/login.png";

const Login = () => {
    // change the title
    window.document.title = "Bloggidea - Login";

    // states for form
    const [loginFormValue, setLoginFormValue] = useState({});

    // handle input change
    const handleInputChange = (e) => {
        const newFormValue = { ...loginFormValue };
        newFormValue[e.target.name] = e.target.value;
        setLoginFormValue(newFormValue);
    };

    // handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(loginFormValue);
    };

    return (
        <div className="login-div">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 align-items-center">
                    <div className="col">
                        <h1 className="fs-biggest text-center mb-3">Login</h1>
                        <form
                            onSubmit={handleFormSubmit}
                            className="w-75 mx-auto"
                        >
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatLoginEmail"
                                    name="email"
                                    placeholder="Email address"
                                    onInput={handleInputChange}
                                    required
                                />
                                <label htmlFor="floatLoginEmail">
                                    Email address
                                </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatLoginPass"
                                    name="password"
                                    placeholder="Password"
                                    onInput={handleInputChange}
                                    required
                                />
                                <label htmlFor="floatLoginPass">Password</label>
                            </div>
                            <button
                                className="btn btn-outline-primary"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    <div className="col">
                        <img
                            src={loginImg}
                            alt="Login Vector"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
