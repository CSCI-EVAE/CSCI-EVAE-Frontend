import React, { useState } from 'react';
import { TextField, Alert } from '@mui/material';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../composants/Button';
interface Props {
    onLoginSuccess: () => void;
}

const LoginForm: React.FC<Props> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(''); 
        try {
            await login({ username, password });
            onLoginSuccess();
            navigate("/dashboard")
            
        } catch (error: any) {
            setError(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
                label="Nom d'utilisateur"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrez votre nom d'utilisateur"
            />
            <TextField
                label="Mot de Passe"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"

            />
            <ButtonComponent text='Se Connecter' type='submit' variant="contained" />
              
        </form>
    );
};

export default LoginForm;
