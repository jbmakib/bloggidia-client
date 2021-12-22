import React from "react";
import "./Login.css";
import loginImg from "../../../assets/media/images/login.png";

const Login = () => {
    window.document.title = "Bloggidea - Login";
    return (
        <div className="login-div">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col"></div>
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
