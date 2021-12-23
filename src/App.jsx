import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About/About";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
