import React, {useEffect} from 'react';
import LoginForm from '../components/LoginForm';
import { Container } from '@mui/material';
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../utils/authUtils";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/dashboard'); // Redirect to the dashboard if already logged in
        }
    }, [navigate]);
    const handleLoginSuccess = () => {
        console.log('Login successful');
    };

    return (
        <Container maxWidth="xs">
            <h1>Login</h1>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
    {/* Implement ForgotPasswordForm similarly */}
    </Container>
);
};

export default LoginPage;
