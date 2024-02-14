import React, { useState } from 'react';
import { TextField, Alert } from '@mui/material';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../composants/Button';

const InfoGeneralesForm:  React.FC = () => {

    const [designation, setDesignation] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [formation, setFormation] = useState('');
    const [promotion, setPromotion] = useState('');
    const [ue, setUe] = useState('');
    const [ec, setEc] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(''); 
        try {
           
            
        } catch (error: any) {
           
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Alert severity="error">{error}</Alert>}
            
            <h3>Promotion : </h3>
            <TextField
                label="Formation"
                variant="outlined"
                margin="normal"
                value={formation}
                onChange={(e) => setFormation(e.target.value)}
            />

            <TextField
                label="Formation"
                variant="outlined"
                margin="normal"
                value={formation}
                onChange={(e) => setFormation(e.target.value)}
            />
            <TextField
                label="Unité d'enseignement"
                variant="outlined"
                margin="normal"
                value={ue}
                onChange={(e) => setUe(e.target.value)}
            />
             <TextField
                label="Element constitutif"
                variant="outlined"
                margin="normal"
                value={ec}
                onChange={(e) => setEc(e.target.value)}
            />
            
            <TextField
                label="Désignation"
                variant="outlined"
                fullWidth
                margin="normal"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Entrez la désignation de l'évaluation"
            />
            <TextField
                label="Date de début"
                type="date"
                variant="outlined"
                margin="normal"
                value={dateDebut}
                onChange={(e) => setDateDebut(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
                <TextField
                label="Date de fin"
                type="date"
                variant="outlined"
                margin="normal"
                value={dateFin}
                onChange={(e) => setDateFin(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <ButtonComponent text='Suivant' type='submit' variant="contained" />
              
        </form>
    );
};

export default InfoGeneralesForm;
