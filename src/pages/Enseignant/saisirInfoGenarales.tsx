import React, { useState } from "react";
import { TextField, Alert } from "@mui/material";
import ButtonComponent from "../../components/common/Button";
import { useNavigate } from "react-router-dom";


interface Props {
    onLoginSuccess: () => void;
}

const LoginForm: React.FC<Props> = ({ onLoginSuccess }) => {
    const [designation, setDesignation] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");
    const [error, setError] = useState("");
    
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Alert severity="error">{error}</Alert>}
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
                label="Date début de Réponse"
                type="date"
                variant="outlined"
                fullWidth
                margin="normal"
                value={dateDebut}
                onChange={(e) => setDateDebut(e.target.value)}
                placeholder="Entrez la date de début de l'évaluation"
            />
              <TextField
                label="Date fin de Réponse"
                type="date"
                variant="outlined"
                fullWidth
                margin="normal"
                value={dateFin}
                onChange={(e) => setDateFin(e.target.value)}
                placeholder="Entrez la date de fin de l'évaluation"
            />
            <ButtonComponent
                text="Suivant"
                type="submit"
                variant="contained"
            />
        </form>
    );
};

export default LoginForm;
