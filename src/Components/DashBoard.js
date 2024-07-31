import React, { useEffect, useState } from 'react';
import './DashBoard.css';

const DashBoard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        try {
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser.user_name) {
                    setUser(parsedUser);
                } else {
                    console.warn('User data is missing user_name:', parsedUser);
                }
            }
        } catch (error) {
            console.error('Error parsing user data from local storage:', error);
        }
    }, []);

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li><a href="#stock"><i className="fas fa-box"></i> Stock</a></li>
                    <li><a href="#bookings"><i className="fas fa-calendar-check"></i> Bookings</a></li>
                    <li><a href="#delivery"><i className="fas fa-truck"></i> Delivery Updates</a></li>
                    <li><a href="#earnings"><i className="fas fa-money-bill-wave"></i> Monthly Earnings</a></li>
                </ul>
            </div>
            <div className="main-content">
                <div className="welcome-card">
                    <h3>Welcome to your Dashboard, {user ? user.user_name : 'User'}!</h3>
                    <p>Select an option from the sidebar to get started.</p>
                </div>
                {/* Add more content here as needed */}
            </div>
        </div>
    );
};

export default DashBoard;
