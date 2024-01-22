import React from 'react';
import './taskbar.css';
 
const Taskbar = () => {
    return (
        <div className="taskbar">
            <div>profitease</div>
            <div className="button-container">
                <button className="button">Login</button>
                <button className="button-sign-up">Sign up</button>
            </div>
        </div>
    );
};

export default Taskbar;
