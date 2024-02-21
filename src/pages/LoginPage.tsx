import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { Container, Paper, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authUtils";
import image from "../images/echoSim.png";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/dashboard"); 
        }
    }, [navigate]);

    const handleLoginSuccess = () => {
        console.log("Connexion réussie");
    };

    const containerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        background: "rgba(255, 255, 255, 0.4)", 
    };

    const paperStyle: React.CSSProperties = {
        padding: "20px",
        textAlign: "center",
        background: "",
    };

  const textStyle: React.CSSProperties = {
        fontFamily: "cursive",
        color: "#e3a12f"
  }

   



    return (
        <Container maxWidth="md" style={containerStyle}>
            <Paper elevation={3} style={paperStyle}>
                <Box mb={2}>
                    <img
                        src={image}
                        alt="Logo"
                        width="150"
                        style={{"margin":"-20px"}}
                    />
                </Box>
                <Typography variant="h5" gutterBottom style={textStyle} >
                    Connexion
                </Typography>
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            </Paper>
        </Container>
    );
};

export default LoginPage;
