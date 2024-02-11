// src/components/Header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user'); // Assuming you store user info here
        navigate('/login');
    };

    return (
        <header>
            <nav>
                {/* Navigation links */}
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    );
};

export default Header;
