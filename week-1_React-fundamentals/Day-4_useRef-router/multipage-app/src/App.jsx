import React, { useRef } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <nav style={{ backgroundColor: "#282c34", padding: "1rem" }}>
                 <Link to="/" style={{ color: "#61dafb", marginRight: "1rem" }}>Home</Link>
                  <Link to="/about" style={{ color: "#61dafb", marginRight: "1rem" }}>About</Link>
                  <Link to="/contact" style={{ color: "#61dafb" }}>Contact</Link>
            </nav>

            <button onClick={() => navigate("/about")}>Go to About</button>

            <input ref={inputRef} placeholder="Click button to focus" />
            <button onClick={handleFocus}>Focus Input</button>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
