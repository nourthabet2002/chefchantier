import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate(); // Using navigate from useNavigate hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:7000/logchef", { email, password });

            if (res.data === "exist") {
                // Navigate to a route that renders both Header and Naviger components
                navigate("/menu_and_milieu");
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={submit} className="login-form">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="login-input" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="login-input" />
                <button type="submit" className="login-submit-btn">Login</button>
            </form>
            <p className="login-or">OR</p>
            {/* <Link to="/Signup" className="login-signup-link">Signup Page</Link> */}
        </div>
    );
}

export default Login;



