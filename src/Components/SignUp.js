import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_email: '',
        user_phone: '',
        user_password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', {
                ...formData,
                user_lastname: 'Doe',
                user_city: 'Hyderabad',
                user_zipcode: '500072'
            });

            if (response.status === 200) {
                alert('Registration successful!');
                navigate('/login'); // Navigate to the login page
            }
        } catch (error) {
            console.error(error);
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="container">
            <div className="welcome-section">
                <h2>Welcome to our community</h2>
                <p>Join us and start building your application today. More than 17k people joined us, it’s your turn.</p>
            </div>
            <div className="form-section">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="user_firstname" placeholder="Full name" onChange={handleChange} required />
                    <input type="email" name="user_email" placeholder="Email address" onChange={handleChange} required />
                    <input type="password" name="user_password" placeholder="Password" onChange={handleChange} required />
                    <input type="text" name="user_phone" placeholder="Phone" onChange={handleChange} />
                    <div className="form-footer">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Creating account...' : 'Create your free account'}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
                <p className="login-redirect">
                    Already have an account? <button onClick={handleLoginRedirect}>Log in</button>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
