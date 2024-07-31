import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', formData);

            if (response.status === 200 && response.data.status === true) {
                localStorage.setItem('user', JSON.stringify(response.data.user_data));
                alert('Login successful!');
                navigate('/dashboard'); // Navigate to the dashboard page
            } else {
                alert('Login failed: ' + response.data.msg);
            }
        } catch (error) {
            console.error(error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="user_email" placeholder="Email address" onChange={handleChange} required />
                    <input type="password" name="user_password" placeholder="Password" onChange={handleChange} required />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
